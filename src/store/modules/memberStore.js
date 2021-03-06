const memberStore = {
  namespaced: true,
  state: {
    loginYn: false,
    id: '',
    seq: '',
    name: '',
    loginDate: ''
  },
  getters: {
    getLoginYn: state => state.loginYn,
    getId: state => state.id,
    getName: state => state.name,
    getSeq: state => state.seq,
    getLoginDate: state => state.loginDate
  },
  mutations: {
    mutLogin: (state, payload) => {
      state.loginYn = true
      state.id = payload.id
      state.seq = payload.seq
      state.loginDate = Date.now()
    },
    mutLogout: (state, payload) => {
      state.loginYn = false
      state.id = ''
      state.seq = ''
      state.name = ''
      state.loginDate = ''
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
