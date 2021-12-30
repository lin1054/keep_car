import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TOKEN_KEY = 'HYC_USER'
export default new Vuex.Store({
  state: {
    // user是一个对象
    user: JSON.parse(window.localStorage.getItem(TOKEN_KEY)) || null
  },
  mutations: {
    setUser (state, data) {
      state.user = data

      // 为防止刷新我们需要把数据备份到本地
      window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
