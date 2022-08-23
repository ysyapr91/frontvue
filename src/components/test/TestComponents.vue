<!-- 다른 vue Component template를 호출하여 사용-->
<template>
    <div id="TestComponents">
        <div class="tabs" ref="tabbar">
            <div class="tabitem" :class="index === activetab ? 'active' : ''"  v-for="(tab, index) in items" @click="switchtab(index)" :key="index" ref="tab">{{tab}}</div>
            <div class="slider" :style="'transform:translateX(' + activetab * tabwidth + 'px)'"></div>
        </div>
        <div class="tabcontainer" ref="tcon">
            <keep-alive>
                <component :is="whichStep"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TestComponents',
  components: {
    'login': () => import('./Test1.vue'),
    'mapList': () => import('./Test4.vue'),
    'mapRegi': () => import('./Test5.vue'),
    'calendar': () => import('./Test6.vue')
  },
  data () {
    return {
      activetab: 0,
      tabwidth: 100,
      items: ['mapRegi', 'mapList', 'login', 'calendar']
    }
  },
  methods: {
    switchtab (n) {
      this.activetab = n
    }
  },
  mounted () {
    this.$refs.tabbar.style.setProperty('--tabwidth', this.tabwidth + 'px')
  },
  computed: {
    whichStep () {
      return this.items[this.activetab]
    }
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
  height:500px;
  position: relative;
  min-height: 100%;
  width: 100%;
  touch-action:pan-y;
}
</style>
