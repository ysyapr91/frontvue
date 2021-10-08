const postStore = {
  namespaced: true,
  state: {
    postList: [
      {
        title: 'testTitle',
        author: 'test'
      }
    ]
  },
  getters: {
    GE_POST_LIST: state => state.postList
  },
  mutations: {
    MU_POST_LIST: (state, payload) => {
      state.postList = payload
    }
  },
  actions: {
    AC_USER_NAME: ({ commit }, payload) => {
      commit('MU_POST_LIST', payload)
    }
  }
}

export default postStore
