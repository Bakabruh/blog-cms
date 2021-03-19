<template>
    <div class="creation">
        <label for="title">Titre de la page</label>
        <input id="title" v-model="title" type="text">

        <label for="imgUrl">Image</label>
        <input type="text" id="imgUrl" v-model="imgUrl">

        <label for="meta-title">Meta Title</label>
        <input id="meta-title" v-model="metaTitle" type="text">

        <label for="meta-description">Meta description</label>
        <input id="meta-description" v-model="metaDescription" type="text">

        <label for="content">Contenu du post</label>
        <textarea id="content" v-model="content" name="content"></textarea>

        <button @click="createPage">Create a page</button>
        <router-link to="/admin">Back to the admin panel</router-link>
    </div>

</template>

<script>
import { mapState } from "vuex"

export default {
    name: "CreatePage",
    data() {
        return {
            title: "",
            imgUrl: "",
            metaTitle: "",
            metaDescription: "",
            content: ""
        }
    },

    computed: {
        ...mapState(['posts'])
    },
    
    methods: {
        createPage() {
            let page = {
                title: this.title,
                imgUrl: this.imgUrl,
                metaTitle: this.metaTitle,
                metaDescription: this.metaDescription,
                content: this.content
            }

            this.$store.dispatch('createPage', page)
        }
    }
}
</script>

<style scoped>

    .creation {
        border: 1px solid black;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .creation form {
        width: 40%;
        display: flex;
        flex-direction: column;
    }

    .creation form input {
        margin: 10px 0;
    }

    .creation form textarea {
        margin: 10px 0;
    }

</style>