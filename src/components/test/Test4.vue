<template>
    <div id="test4">
        <h3>Mindmap select TEST</h3>
        <button type="button" @click="list">List</button>
        <div class="map-div" v-for="(map, index) in mapList" :key="index">
            {{map.map_seq}} : {{map.title}} : {{map.value}}
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
      mapList: '',
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
        .get(this.apiHost + '/mindmap/list')
        .then(function (res) {
          console.log(res.data)
          _this.mapList = res.data.data
          _this.apiMsg = res.data.msg
        })
        .catch(function (err) {
          alert(err)
        })
    }
  },
  created () {
    this.list()
  }
}
</script>
