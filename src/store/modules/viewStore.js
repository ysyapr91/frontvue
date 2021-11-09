const viewStore = {
  namespaced: true,
  state: {
    content: '',
    navState: false
  },
  getters: {
    content: state => state.content,
    navState: state => state.navState
  },
  mutations: {
    MUT_CONTENT: (state, name) => (state.content = name),
    MUT_NAV_TOGGLE: (state, name) => (state.navState = name)
  },
  actions: {
    SET_CONTENT: ({ commit }, name) => commit('MUT_CONTENT', name),
    NAV_TOGGLE: function (d) {
      var bl = true
      if (this.state.navState) bl = false
      return d.commit('MUT_NAV_TOGGLE', bl)
    }
  }
}

export default viewStore
