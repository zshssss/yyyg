import Vue from 'vue'
export const USER_SIGNIN = 'USER_SIGNIN' //用户登录
export const USER_SIGNOUT = 'USER_SIGNOUT' //用户退出

export default {
  state: sessionStorage.getItem('user') || {},
  mutations: {
    [USER_SIGNIN](state, user) {
      sessionStorage.setItem('user', JSON.stringify(user))

      Object.assign(state, user)
    },
    [USER_SIGNOUT](state) {
      sessionStorage.removeItem('user')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    [USER_SIGNIN]({
      commit
    }, user) {
      commit(USER_SIGNIN, user)
    },
    [USER_SIGNOUT]({
      commit
    }) {
      commit(USER_SIGNOUT)
    }
  }
}