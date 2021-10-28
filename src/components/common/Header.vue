<template>
    <div id="headers">
        <div v-if="loginYn">
            <table class="header-table">
                <tr>
                    <td>
                        <h3>[ {{id}} / {{seq}} / {{loginDate}}]</h3>
                    </td>
                    <td>
                        <button type="button" @click="logout">Logout</button>
                    </td>
                </tr>
            </table>
        </div>
        <div v-else>
            <table class="header-table">
                <tr>
                    <td>
                        <h3>Header</h3>
                    </td>
                    <td>
                        <button type="button" @click="openModal('login')">Login</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
const memberStore = 'memberStore'

export default {
  name: 'headers',
  data () {
    return {
      loginYn: false,
      id: '',
      seq: '',
      loginDate: '',
      open: [],
      apiMsg: ''
    }
  },
  computed: {
    ...mapGetters(memberStore, {
      getLoginYn: 'getLoginYn',
      getId: 'getId',
      getLoginDate: 'getLoginDate'
    })
  },
  watch: {
    getLoginYn (val) { this.loginYn = val },
    getId (val) { this.id = val },
    getLoginDate (val) { this.loginDate = val }
  },
  methods: {
    logout () {
      this.$store.dispatch('memberStore/actLogout', '')
    },
    openModal (name) {
      this.$store.dispatch('modalStore/open', name)
    }
  }
}
</script>

<style scoped>
#headers {
  display:flex;
  text-align: right;
  position:relative;
  color: #f1f1f1;
  background: #2c3e50;
}
</style>
