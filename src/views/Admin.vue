<template>
    <div class="admin">
        <Page></Page>
        <CreatePage></CreatePage>
        <EditPage></EditPage>
    </div>
</template>

<script>
import Page from '@/components/Page'
import CreatePage from '@/components/CreatePage'
import EditPage from '@/components/EditPage'

export default {
    name: 'Admin',
    components: {
        Page,
        CreatePage,
        EditPage
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