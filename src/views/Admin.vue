<template>
    <div class="admin">
        <Page></Page>
        <CreatePage style="display: none;"></CreatePage>
    </div>
</template>

<script>
import Page from '../components/Page'
import CreatePage from '../components/CreatePage'

export default {
    name: 'Admin',
    components: {
        Page,
        CreatePage
    },
}
</script>

<style scoped>

    .admin {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>