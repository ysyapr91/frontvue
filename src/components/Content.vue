<template>
    <div id="content">
        <testSlide>Slide</testSlide>
        <testComponents>Components</testComponents>
    </div>
</template>

<script>
export default {
  name: 'Content',
  components: {
    'testSlide': () => import('./test/TestSlide.vue'),
    'testComponents': () => import('./test/testComponents.vue')
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>
