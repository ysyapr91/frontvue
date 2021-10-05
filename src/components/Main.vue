<template>
    <div class="main">
        <main-header/>
        <h3>{{ msg }}</h3>
        <main-content/>
        <main-footer/>
    </div>
</template>

<script>
import MainHeader from './common/Header.vue'
import MainContent from './Content.vue'
import MainFooter from './common/Footer.vue'

export default {
  name: 'Main',
  components: {
    'main-header': MainHeader,
    'main-content': MainContent,
    'main-footer': MainFooter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
