import tool from '../utils/tool'
const state = {
  token:null,
}
const getters = {}

const mutations = {
  userRegister (state, token) {
    state.token = token;
  }
}
const actions = {
  userRegister ({commit}, prarms) {
    tool.handleUserRegister(prarms)
    .then((response)=>{
      const {code,msg,data} = response;
      console.log(code,msg,data);
      commit('userRegister', data)
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}