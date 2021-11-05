const viewStore = {
  namespaced: true,
  state: {
    content: '',
    navToggle: false
  },
  getters: {
    content: state => state.content,
    navToggle: state => state.navToggle
  },
  mutations: {
    MUT_CONTENT: (state, name) => state.open.unshift(name)
  },
  actions: {
    SET_CONTENT: ({ commit }, name) => commit('MUT_CONTENT', name)
  }
}

export default viewStore
