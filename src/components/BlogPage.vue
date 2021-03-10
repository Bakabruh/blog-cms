<template>
    <div class="blog-page" v-for="post in posts" :key="post.title">
        <h1>{{ post.title }}</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'BlogPage',

    computed: {
        ...mapState(['posts'])
    }
}
</script>

<style scoped>

</style>