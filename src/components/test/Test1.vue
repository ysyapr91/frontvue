<template>
    <div id="test1">
        <h3>LOGIN / LOGOUT TEST</h3>
        ID : <input v-model="params.id" type="text">
        <br/>
        PW : <input v-model="params.password" type="password">
        <br/>
        <button type="button" @click="login">Login</button>
        <br/>
        {{apiMsg}}
        <br/>
        <br/>
        <button type="button" @click="logout">Logout</button>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
const envStore = 'envStore'
const memberStore = 'memberStore'

export default {
  name: 'test1',
  data () {
    return {
      params: {
        id: '',
        password: ''
      },
      apiMsg: ''
    }
  },
  computed: {
    ...mapGetters(envStore, {
      apiHost: 'API_HOST'
    }),
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
    ...mapActions(memberStore, [
      'actLogin',
      'actLogout'
    ]),
    login () {
      let _this = this
      axios
        .post(this.apiHost + '/member/login', this.params)
        .then(function (res) {
          _this.apiMsg = res.data.msg
          _this.loginSuccess(res.data.data)
        })
        .catch(function (err) {
          alert(err)
        })
    },
    loginSuccess (data) {
      const payload = {
        id: data.id
      }
      this.actLogin(payload)
    },
    logout () {
      this.actLogout({})
    }
  }
}
</script>
