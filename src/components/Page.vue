<template>
    <div class="upper">
        <router-link to="/create-page"><button>Create a page</button></router-link>
    </div>

    <div class="page" v-for="post in posts" :key="post">
        <img :src="post.imgUrl" alt="Page">
        <div class="main">
            <h1>{{ post.title }}</h1>
            <h2>{{ post.metaTitle }}</h2>
            <h2>{{ post.metaDescription }}</h2>
            <p>{{ post.content }}</p>
        </div>
        <span style="cursor: pointer;"><i class="fas fa-edit fa-2x"></i></span>
        <span @click="deletePage(posts.indexOf(post))" style="color: rgb(134, 20, 20); cursor: pointer;"><i class="fas fa-times fa-3x"></i></span>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'Page',

    computed: {
        ...mapState(["posts"])
    },

    methods: {
        deletePage(index) {
            this.$store.dispatch('deletePage', index)
        }
    }
}
</script>

<style scoped>

    .page {
        width: 70%;
        min-height: 20vh;
        border: 2px solid grey;
        padding: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px 0;
    }

    .page .main {
        display: flex;
        flex-direction: column;
    }

    .page .main p {
        padding: 0 20px;
    }

    .page span {
        margin: 0 10px;
    }

    .upper {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .upper button {
        margin-right: 250px;
        padding: 10px;
        border: 3px solid rgb(15, 14, 14);
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        border-radius: 50px;
    }

    .upper button:hover {
        background-color: peachpuff;
        transition: 0.2s;
        color: white;
        border-color: white;
    }

</style>