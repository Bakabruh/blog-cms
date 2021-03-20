<template>
    <!-- Affichage des pages grâce à un v-for -->
    <div class="blog-page" v-for="post in posts" :key="post.title">
        <div v-if="$route.params.id == null">
            <h1>{{ post.title }}</h1>
            <span>{{ date }}</span>
            <router-link :to="'/blog/' + posts.indexOf(post)"><button>View the page</button></router-link>
        </div>
        <div v-if="$route.params.id == posts.indexOf(post)">
            <router-view v-bind:single="post"></router-view>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'BlogPage',

    //Données utilisées pour la date
    data() {
        return {
            month: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        }
    },

    computed: {
        ...mapState(['posts']),

        //fonction d'affichage de la date
        date: function() {
            let today = new Date()
            let todate = today.getDate() + ' ' + `${this.month[(today.getMonth())]}` + ' ' + today.getFullYear() +  ' ' + today.getHours() + 'h' + today.getMinutes()
            return todate
        }
    }
}
</script>

<style scoped>

    .blog-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0;
    }

    .blog-page div {
        display: flex;
    }

</style>