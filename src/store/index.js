import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
  },

  mutations: {
    CREATE_PAGE(state, payload) {
      state.posts.push(payload)
    },

    /*DELETE_PAGE(state, page) {
      state.posts.splice(state.posts.indexOf(post), 1)
    }*/
  },

  actions: {
    
  },
  
  modules: {
  }
})
