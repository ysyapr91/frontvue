<template>
    <div id="loginModal" name="login">
        <h3>LOGIN</h3>
        ID : <input v-model="params.id" type="text">
        <br/>
        PW : <input v-model="params.password" type="password">
        <br/>
        <button type="button" @click="login">Login</button>
        <br/>
        {{apiMsg}}
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
const envStore = 'envStore'
const memberStore = 'memberStore'

export default {
  name: 'loginModal',
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
    })
  },
  methods: {
    ...mapActions(memberStore, [
      'actLogin'
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
      this.actLogin({
        id: data.id,
        seq: data.seq
      })
    }
  }
}
</script>
