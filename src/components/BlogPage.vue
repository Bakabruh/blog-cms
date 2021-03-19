<template>
    <div class="blog-page" v-for="post in posts" :key="post.title">
        <div>
            <h1>{{ post.title }}</h1>
            <span>{{ date }}</span>
        </div>
        <p>{{ post.content }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'BlogPage',

    data() {
        return {
            month: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        }
    },

    computed: {
        ...mapState(['posts']),

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