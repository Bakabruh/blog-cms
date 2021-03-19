<template>
    <div class="login">
        <form action="#">
            <div class="email">
                <label for="email">Email: </label>
                <input v-model="email" id="email" type="email" placeholder="enter email">
            </div>
            <div class="password">
                <label for="password">Password: </label>
                <input v-model="password" id="password" type="password" placeholder="enter password">
            </div>
            <button @click="login">Connect</button>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "Login",

    data() {
        return {
            email: "",
            password: ""
        }
    },

    computed: {
        ...mapState(['user'])
    },

    methods: {
        login() {
            this.$store.dispatch("LOGIN", {
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>

<style scoped>
    .login {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: 20vh;
    } 
    .login form {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
    .login form .email {
        display: flex;
        margin: 10px;
        align-items: center;
    }
    .login form .email label {
        margin: 0 50px;
    }
    
    .login form .email input {
        padding: 10px;
        outline: none;
        border: none;
        border-radius: 30px;
    }
    .login form .password {
        display: flex;
        margin: 50px;
        align-items: center;
    }
    .login form .password label {
        margin: 0 50px;
    }
    
    .login form .password input {
        padding: 10px;
        outline: none;
        border: none;
        border-radius: 30px;
        margin-right: 30px;
    }

    .login form button {
        font-size: inherit;
        background: rgb(105, 7, 161);
        padding: 0.5em 1.5em;
        border: 0;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        outline: 2px solid rgb(105, 7, 161);
        transition: outline-offset 0.25s ease, outline-color 0.25s ease, outline-width 0.25s ease;
    }

    .login form button:hover, .login form button:focus {
        outline-color: #FF9C75;
        outline-width: 3px;
        outline-offset: -6px;
    }
</style>