<template>
    <div id="test4">
        <h3>Mindmap select TEST</h3>
        <button type="button" @click="list">List</button>
        <br/>
        {{listSize}}
        <div class="map-div" v-for="(map, index) in mapList" :key="index">
            [{{map.mem_seq}}] {{map.map_seq}} = {{map.pmap_seq}} : {{map.title}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
const envStore = 'envStore'

export default {
  name: 'test4',
  data () {
    return {
      params: {},
      mapList: {},
      listSize: 0,
      apiMsg: ''
    }
  },
  computed: {
    ...mapGetters(envStore, {
      apiHost: 'API_HOST'
    })
  },
  methods: {
    list () {
      let _this = this
      axios
        .post(this.apiHost + '/mindmap/list', {})
        .then(function (res) {
          console.log(res.data)
          _this.mapList = res.data.data
          _this.apiMsg = res.data.msg
          _this.listSize = _this.mapList.length
          _this.cycle()
        })
        .catch(function (err) {
          alert(err)
        })
    },
    cycle () {
      this.inCycle(0)
    },
    inCycle (i) {
      if (this.listSize > i) {
        // let seq = 0
        // let child = {}
        // console.log(this.mapList[i].map_seq + ':' + this.mapList[i].pmap_seq)
        this.inCycle(i + 1)
      }
    }
  },
  created () {
    this.list()
  }
}
</script>
