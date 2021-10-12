<template>
    <div id="test5">
        <h3>Mindmap regist TEST</h3>
        TITLE : <input v-model="params.title" type="text">
        <br/>
        VALUE : <input v-model="params.value" type="text">
        <br/>
        <button type="button" @click="add">Add</button>
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
        value: ''
      },
      apiMsg: ''
    }
  },
  computed: {
    ...mapGetters(envStore, {
      apiHost: 'API_HOST'
    })
  },
  methods: {
    add () {
      let _this = this
      axios
        .post(this.apiHost + '/mindmap/register', this.params)
        .then(function (res) {
          console.log(res.data)
          _this.mapList = res.data.data
          _this.apiMsg = res.data.msg
        })
        .catch(function (err) {
          alert(err)
        })
    }
  }
}
</script>
