const memberStore = {
  namespaced: true,
  state: {
    loginYn: false,
    id: '',
    name: '',
    loginDate: ''
  },
  getters: {
    getLoginYn: state => state.loginYn,
    getId: state => state.id,
    getName: state => state.name,
    getLoginDate: state => state.loginDate
  },
  mutations: {
    mutLogin: (state, payload) => {
      state.loginYn = true
      state.id = payload.id
      state.loginDate = Date.now()
    },
    mutLogout: (state, payload) => {
      state.loginYn = false
      state.id = ''
    }
  },
  actions: {
    actLogin: ({ commit }, payload) => {
      commit('mutLogin', payload)
    },
    actLogout: ({ commit }, payload) => {
      commit('mutLogout', payload)
    }
  }
}

export default memberStore
