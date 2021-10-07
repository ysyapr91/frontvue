<template>
    <div id="test1">
        <button type="button" @click="localApi">Call</button>
        {{apiRes}}
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'test1',
  data () {
    return {
      apiRes: ''
    }
  },
  computed: {
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
    localApi () {
      const url = 'http://localhost:8081/'
      axios
        .get(url)
        .then(function (res) {
          console.log(res.data)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>
