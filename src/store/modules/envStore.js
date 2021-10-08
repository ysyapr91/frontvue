const apiHost = 'http://localhost:8081'

const envStore = {
  namespaced: true,
  state: {
    apiHost: apiHost
  },
  getters: {
    API_HOST: state => state.apiHost
  }
}

export default envStore
