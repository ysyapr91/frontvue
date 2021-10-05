<template>
    <div id="testSlide">
        {{comp}}
    </div>
</template>

<script>
import Test1 from './Test1.vue'
import Test2 from './Test2.vue'
import Test3 from './Test3.vue'

const comp = '1'

export default {
  name: 'TestSlide',
  components: {
    'test1': Test1,
    'test2': Test2,
    'test3': Test3
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      comp: comp
    }
  }
}
</script>
