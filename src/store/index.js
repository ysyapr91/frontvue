import Vue from 'vue'
import Vuex from 'vuex'
import envStore from '@/store/modules/envStore.js'
import userStore from '@/store/modules/userStore.js'
import postStore from '@/store/modules/postStore.js'
import memberStore from '@/store/modules/memberStore.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    envStore: envStore,
    userStore: userStore,
    postStore: postStore,
    memberStore: memberStore
  }
})

export default store
