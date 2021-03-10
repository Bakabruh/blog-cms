<template>
    <div class="blog">
        <h1>This the blog page</h1>

        <BlogPage/>
    </div>
</template>

<script>
import BlogPage from '@/components/BlogPage'

export default {
    name: "Blog",
    
    components: {
        BlogPage
    }
}
</script>

<style scoped>

</style>