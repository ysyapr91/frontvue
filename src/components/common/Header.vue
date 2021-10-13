<template>
    <div id="headers">
        <div v-if="loginYn">
            <h3>[ {{id}} / {{seq}} / {{loginDate}}]</h3>
        </div>
        <div v-else>
            <h3>Header</h3>
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
    getLoginYn (val) {
      this.loginYn = val
    },
    getId (val) {
      this.id = val
    },
    getLoginDate (val) {
      this.loginDate = val
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
