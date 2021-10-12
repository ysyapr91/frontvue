<template>
    <div id="test3">
        <h3>API axios TEST</h3>
        <button type="button" @click="localApi">Call</button>
        {{apiRes}}
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
const envStore = 'envStore'

export default {
  name: 'test3',
  data () {
    return {
      apiRes: ''
    }
  },
  computed: {
    ...mapGetters(envStore, {
      apiHost: 'API_HOST'
    }),
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
    localApi () {
      const url = this.apiHost

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
