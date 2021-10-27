<template>
    <div class="main">
        <main-header/>
        <button @click="open('login')">Open Simple Modal</button>
        <main-content/>
        <modal/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
const modalStore = 'modalStore'

export default {
  name: 'Main',
  components: {
    'main-header': () => import('./common/Header.vue'),
    'main-content': () => import('./Content.vue'),
    'main-footer': () => import('./common/Footer.vue'),
    'modal': () => import('./common/Modal.vue')
  },
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapGetters(modalStore, {
      apiHost: 'API_HOST'
    })
  },
  methods: {
    open (name) {
      this.$store.dispatch('modalStore/open', name)
    }
  }
}
</script>

<style scoped>
</style>
