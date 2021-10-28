<template>
    <div v-if="isOpen" :class="`modal-overlay ${isOpen?'modal-overlay--active':''}`" @click.self="close()">
        <div class="modal-wrapper">
            <button @click="close">X</button>
            <slot :close="close"></slot>
            <component :is="whichModal"></component>
        </div>
        <slot name="child"></slot>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  components: {
    'login': () => import('./Login.vue'),
    'test': () => import('@/components/test/Test4.vue')
  },
  data () {
    return {}
  },
  computed: {
    isOpen () {
      return this.$store.getters['modalStore/active'] !== null
    },
    whichModal () {
      return this.$store.getters['modalStore/active']
    }
  },
  methods: {
    close () {
      this.$store.dispatch('modalStore/close', this.$store.getters['modalStore/active'])
    }
  },
  beforeDestroy () {
    if (this.isOpen) this.close()
  }
}
</script>

<style scoped>
*:focus {
  outline: none;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 1s ease-in-out;
  width: 100%;
}
.modal-overlay--active {
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-wrapper {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  padding: 20px;
  transition: all 0.3s ease;
  /* Always leave a little space above */
  max-height: 80%;
  /* Size up to max width */
  max-width: 300px;
  width: 100%;
  /* Center */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-wrapper button {
  float: right;
}
</style>
