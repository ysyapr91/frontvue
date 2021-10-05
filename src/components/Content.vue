<template>
    <div id="content">
        <test>Content</test>
    </div>
</template>

<script>
import TestSlide from './test/TestSlide.vue'

export default {
  name: 'Content',
  components: {
    'test': TestSlide
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
