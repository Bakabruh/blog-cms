<template>
    <div class="page">
        <h1>{{ single.title }}</h1>
        <p>{{ single.content }}</p>
        <router-link to="/blog">Back</router-link>
    </div>
</template>

<script>

export default {
    name: 'SinglePage',

    props: ['single']
}
</script>

<style scoped>

.page {
    display: flex;
    flex-direction: column;
}

</style>