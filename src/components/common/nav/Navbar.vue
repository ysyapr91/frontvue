<template>
    <div id="navbar">
        <h3>Navbar</h3>
    </div>
</template>

<script>
export default {
  name: 'navbar',
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
  }
}
</script>

<style scoped>
#navbar {
  display:flex;
  text-align: center;
  position:relative;
  color: #f1f1f1;
  background: #2c3e50;
}
</style>
