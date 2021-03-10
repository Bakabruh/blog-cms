import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],

    user: {
      email: "chewie.louveau@gmail.com",
      password: "motdepasse"
    }
  },

  mutations: {
    CREATE_PAGE(state, payload) {
      state.posts.push(payload)
    },

    DELETE_PAGE(state, index) {
      state.posts.splice(index, 1)
    },

  },

  actions: {
    createPage(context, page) {
      context.commit('CREATE_PAGE', page)
    },

    deletePage(context, page) {
      context.commit('DELETE_PAGE', page)
    },

  },
  
  modules: {
  }
})
