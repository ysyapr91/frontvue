const modalStore = {
  namespaced: true,
  state: {
    open: []
  },
  getters: {
    active: state => (state.open.length > 0 ? state.open[0] : null),
    allOpen: state => state.open
  },
  mutations: {
    OPEN: (state, payload) => state.open.unshift(payload),
    CLOSE: (state, payload) => (state.open = state.open.filter((e) => e !== payload))
  },
  actions: {
    open: ({ commit }, name) => commit('OPEN', name),
    close: ({ commit }, name) => commit('CLOSE', name)
  }
}

export default modalStore
