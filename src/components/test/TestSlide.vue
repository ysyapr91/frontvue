<!-- transition 태그안에 데이터를 호출해 사용-->
<template>
    <div id="testSlide">
        <div class="tabs" ref="tabbar">
            <div class="tabitem" :class="index === activetab ? 'active' : ''"  v-for="(tab, index) in items" @click="switchtab(index)" :key="index" ref="tab">{{tab}}</div>
            <div class="slider" :style="'transform:translateX(' + activetab * tabwidth + 'px)'"></div>
        </div>
        <div class="tabcontainer" ref="tcon">
            <transition :name="transition" v-for="(tab, index) in items" :key="index">
                <div class="tabpane" v-if="index === activetab">
                    {{tab}} : Tab Content<br>
                    [{{activetab}}]
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TestSlide',
  components: {},
  data () {
    return {
      transition: 'slide-next',
      activetab: 0,
      tabwidth: 100,
      items: ['a', 'b', 'c', 'd', 'e']
    }
  },
  methods: {
    switchtab (n) {
      let scroll, scond
      if (this.activetab > n) {
        this.transition = 'slide-prev'
        scroll = n - 1
        if (scond) this.$refs.tab[scroll].scrollIntoView({behavior: 'smooth'})
      } else if (this.activetab < n) {
        this.transition = 'slide-next'
        scroll = n + 1
      }
      scond = scroll >= 0 && scroll < this.items.length
      if (scond) this.$refs.tab[scroll].scrollIntoView({behavior: 'smooth'})
      this.$nextTick(_ => {
        this.activetab = n
      })
    }
  },
  mounted () {
    this.$refs.tabbar.style.setProperty('--tabwidth', this.tabwidth + 'px')
  }
}
</script>

<style scoped>
.tabs{
  display:flex;
  position:relative;
  background:#1565c0;
  color: #f1f1f1;
  height:48px;
  box-shadow:0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 7px 0 rgba(0,0,0,.12);
  overflow-x:scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
}
.tabs::-webkit-scrollbar  {
  width: 0 !important;
  height:0 !important;
}
.tabitem{
  display:flex;
  align-items:center;
  justify-content:center;
  min-width:var(--tabwidth);
  cursor:pointer;
  text-transform:uppercase;
  font-size:14px;
}
.tabitem.active{
  font-weight: 500;
  color: white;
}
.slider{
  position:absolute;
  bottom:0px;
  height:2px;
  width:var(--tabwidth);
  background:white;
  transition:.5s ease;
}
.tabcontainer {
  height:200px;
  position: relative;
  min-height: 100%;
  width: 100%;
  touch-action:pan-y;
}
</style>
