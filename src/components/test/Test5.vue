<template>
    <div id="test5">
        <h3>Mindmap regist TEST</h3>
        PMAP_SEQ : <input v-model="params.pmap_seq" type="text">
        <br/>
        TITLE : <input v-model="params.title" type="text">
        <br/>
        VALUE : <input v-model="params.value" type="text">
        <br/>
        <button type="button" @click="addMap">Add</button>
        <br/><br/>
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
  name: 'test5',
  data () {
    return {
      params: {
        title: '',
        value: '',
        mem_seq: ''
      },
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
        .post(this.apiHost + '/mindmap/list', {})
        .then(function (res) {
          console.log(res.data)
          _this.mapList = res.data.data
          _this.apiMsg = res.data.msg
        })
        .catch(function (err) {
          alert(err)
        })
    },
    addMap () {
      axios
        .post(this.apiHost + '/mindmap/register', this.params)
        .then(function (res) {
          console.log(res.data)
        })
        .catch(function (err) {
          alert(err)
        })
    }
  }
}
</script>
