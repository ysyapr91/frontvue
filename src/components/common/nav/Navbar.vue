<template>
    <div id="navbar">
        {{navShow}}
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
    navShow () {
      return this.$store.getters['viewStore/navState']
    }
  },
  watch: {
  },
  methods: {
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
