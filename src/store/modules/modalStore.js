const modalStore = {
  namespaced: true,
  state: {
    open: [],
    show: false
  },
  getters: {
    active: state => (state.open.length > 0 ? state.open[0] : null),
    allOpen: state => state.open,
    SHOW: state => state.show
  },
  mutations: {
    OPEN: (state, name) => {
      state.show = true
      state.open.unshift(name)
    },
    CLOSE: (state, name) => {
      state.show = false
      state.open = state.open.filter((e) => e !== name)
    }
  },
  actions: {
    open: ({ commit }, name) => commit('OPEN', name),
    close: ({ commit }, name) => commit('CLOSE', name)
  }
}

export default modalStore
