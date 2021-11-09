<template>
    <div class="main">
        <main-header/>
        <main-content/>
        <modal/>
        <navbar></navbar>
    </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    'main-header': () => import('@/components/common/Header.vue'),
    'main-content': () => import('@/components/Content.vue'),
    'main-footer': () => import('@/components/common/Footer.vue'),
    'modal': () => import('@/components/common/modal/Modal.vue'),
    'navbar': () => import('@/components/common/nav/Navbar.vue')
  }
}
</script>

<style scoped>
</style>
