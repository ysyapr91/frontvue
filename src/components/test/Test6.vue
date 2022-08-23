<template>
    <div class="content">
        <table style="width: 100%;">
            <thead>
                <tr>
                    <th>
                        <div class=" ">{{yyyy}} {{mm}}</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="cal_title">
                            <input :id="yyyy" class="date_y" v-model="yyyy" maxlength="4" @keyup.enter="search">.
                            <input :id="mm" class="date_m" v-model="mm" maxlength="2" @keyup.enter="search">.
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="cal_title">
                            <select v-model="sel_pos" @change="selPosChange()">
                                <option selected="selected" value="all">:: 전체 ::</option>
                                <option v-for="(sel,sel_i) in code008" :key="sel_i" :value="sel.CODE">
                                    {{sel.CODE_NM}}/{{sel.CODE}}
                                </option>
                            </select>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="cal_tab">
            <colgroup>
                <col v-for="i_row in row" :key="i_row" :style="{width:100/col + '%'}"/>
            </colgroup>
            <tbody>
                <tr>
                    <th v-for="item in week_name" v-bind:key="item">
                        {{item}}
                    </th>
                </tr>
                <!-- cal : i_col + (i_row - 1)*7 -->
                <!-- day : i_col + (i_row - 1)*7 - firstDay -->

                <tr v-for="i_row in row" :key="i_row" v-show="firstDay + lastDate >= (i_row * 7) - 6">
                    <td v-for="i_col in col" :key="i_col" :id="'cal_' + (i_col + (i_row - 1) * 7)">
                        <p class="p_day">{{cal[i_col + (i_row - 1) * 7 - 1]}}</p>
                        <div v-show="i_col + (i_row - 1) * 7 > firstDay && i_col + (i_row - 1) * 7 - firstDay <= lastDate">
                            <div class="note" :id="yyyy + mm + cal[i_col + (i_row - 1) * 7 - 1]">
                                <div v-for="(vc,vc_i) in vacaNote[i_col + (i_row - 1) * 7 - 1]" :key="vc_i" :class="'vaca stat_' + vc.VACA_STATE + ' div_' + vc.VACA_DIV + ' pos_' + vc.MEMBER_POSITION_CD">
                                    <div>{{vc.MEMBER_NM}}</div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
var date = new Date()
var dd = ('0' + date.getDate()).slice(-2)
var mm = ('0' + (date.getMonth() + 1)).slice(-2)
var yyyy = date.getFullYear()
var firstDay = new Date(yyyy, date.getMonth(), 1).getDay()
var lastDate = new Date(yyyy, mm, 0).getDate()
var array = new Array(42)

export default {
  name: 'content-main',
  data () {
    return {
      date: date,
      dd: dd,
      mm: mm,
      yyyy: yyyy,
      firstDay: firstDay,
      lastDate: lastDate,
      row: 6,
      col: 7,
      week_name: ['일', '월', '화', '수', '목', '금', '토'],
      cal: new Array(42),
      vacaNote: new Array(42),
      calCount: 0,
      day: new Array(this.lastDate),
      jsonData: '',
      code008: [''],
      sel_pos: 'all'
    }
  },
  methods: {
    getCommonData () {
      this.$axios.get(this.$store.state.localHref + '/test/testData2.do').then((result) => {
        this.code008 = result.data
      })
    },
    /* 데이터 초기화 */
    setInit () {
      this.cal = new Array(42)
      for (var i = 0; i < this.lastDate; i++) {
        this.cal[i + this.firstDay] = ('0' + (i + 1)).slice(-2)
      }
      this.vacaNote = new Array(42)
      for (var k = 0; k < this.vacaNote.length; k++) {
        this.vacaNote[k] = []
      }
    },
    /* 휴가자 조회 */
    setVaca (data) {
      /* 화면 재구성 */
      var firstDay = this.firstDay
      array = new Array(42)
      for (var k = 0; k < array.length; k++) {
        array[k] = []
      }
      data.forEach(function (data, idx) {
        var no = Number(data.VACA_DATE.substring(6, 8)) + Number(firstDay) - 1
        array[no].push(data)
      })
      this.vacaNote = array
      this.$nextTick(function () {
        this.selPosChange()
      })
    },
    /* 검색 */
    search () {
      /* 초기값 설정 */
      this.date = new Date(this.yyyy, (this.mm - 1))
      this.dd = ('0' + this.date.getDate()).slice(-2)
      this.mm = ('0' + (this.date.getMonth() + 1)).slice(-2)
      this.yyyy = this.date.getFullYear()
      this.firstDay = new Date(this.yyyy, this.date.getMonth(), 1).getDay()
      this.lastDate = new Date(this.yyyy, this.mm, 0).getDate()
      this.setInit()
      /* 데이터 요청 */
      this.$axios.get(this.$store.state.localHref + '/test/testData.do?yyyymm=' + this.yyyy + this.mm).then((result) => {
        this.jsonData = result.data
        this.setVaca(this.jsonData)
      })
    },
    selPosChange () {
      var vaca = document.getElementsByClassName('vaca')
      var vacaLen = vaca.length
      var i = 0
      if (this.sel_pos === 'all') {
        for (i = 0; i < vacaLen; i++) {
          vaca[i].style.display = 'block'
        }
      } else {
        for (i = 0; i < vacaLen; i++) {
          vaca[i].style.display = 'none'
        }
        var sel = document.getElementsByClassName('pos_' + this.sel_pos)
        var selLen = sel.length
        for (i = 0; i < selLen; i++) {
          sel[i].style.display = 'block'
        }
      }
    }
  },
  created () {
    this.getCommonData()
    this.setInit()
  },
  mounted () {
    this.search()
  }
}
</script>

<style scoped>
.content {font-size: 12px; font-family: sans-serif; height: 100%; overflow: auto}
.date_y {width:70px;}
.date_m {width:45px;}
.date_d {width:25px;}
.cal_title {text-align:center; font-weight: 3px; font-size: 14px;}
.cal_tab {width:100%; text-align:center; border: 1px solid #444444; }
.cal_tab td {vertical-align: top; border: 1px solid #dddddd; width: (100 / 7)+'%'}
.p_day {text-align: left; top: 0}
.note {width: 100%;}
.vaca div{margin: 1px; background: #CEF6E3; display: inline-block; text-align: center;}
.vaca div:hover {background: #CEC6E3; transition-duration: .1s; transition-timing-function: linear; box-shadow: 2px 3px 3px 2px rgba(0,0,0,.1)}
.pos_001 div{background: #CEF6F3;}
.pos_002 div{background: #CEE6E3;}
.pos_003 div{background: #FED6D3;}
.pos_004 div{background: #DEC6C3;}
.pos_005 div{background: #CEA6A3;}
.pos_006 div{background: #BE9693;}
.pos_081 div{background: #ffffff;}
.div_01 {text-align: center;}
.div_01 div{width: 100%;}
.div_02 {text-align: left;}
.div_02 div{width: 50%;}
.div_03 {text-align: right;}
.div_03 div{width: 50%;}
</style>
