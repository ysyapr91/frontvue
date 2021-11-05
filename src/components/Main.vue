<template>
    <div class="main">
        <main-header/>
        <nav/>
        <main-content/>
        <modal/>
    </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    'main-header': () => import('./common/Header.vue'),
    'main-content': () => import('./Content.vue'),
    'main-footer': () => import('./common/Footer.vue'),
    'nav': () => import('./common/nav/Navbar.vue'),
    'modal': () => import('./common/modal/Modal.vue')
  }
}
</script>

<style scoped>
</style>
