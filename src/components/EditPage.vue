<template>
    <div class="edit">
        <label for="title">{{ title }}</label>
        <input id="title" v-model="title" type="text">

        <label for="imgUrl">Image</label>
        <input type="text" id="imgUrl" v-model="imgUrl">

        <label for="meta-title">Meta Title</label>
        <input id="meta-title" v-model="metaTitle" type="text">

        <label for="meta-description">Meta description</label>
        <input id="meta-description" v-model="metaDescription" type="text">

        <label for="content">Contenu du post</label>
        <textarea id="content" v-model="content" name="content"></textarea>

        <router-link id="edit-button"><button>Edit a page</button></router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'EditPage',

    data() {
        return {
            title: "Titre",
            imgUrl: "",
            metaTitle:"",
            metaDescription: "",
            content: ""
        }
    },

    computed: {
        ...mapState['posts']
    }
}
</script>