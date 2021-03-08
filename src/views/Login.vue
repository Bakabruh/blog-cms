<template>
    <div class="login">
        <!-- <form action="/blog">
            <div class="email">
                <label for="email">Email: </label>
                <input id="email" type="email" placeholder="enter email">
            </div>

            <div class="password">
                <label for="password">Password: </label>
                <input id="password" type="password" placeholder="enter password">
            </div>

            <input @click="login" type="submit" value="Se connecter">
        </form> -->
    </div>
</template>

<script>
export default {
    name: "Login",

    methods: {
        /*login() {
            let email = document.getElementById('email')
            let password = document.getElementById('password')

            if(email.value  == this.$store.state.user.email && password.value == this.$store.state.user.password) {
                let newDiv = document.createElement('div')
                newDiv.textContent = "You are now connected !"
                newDiv.style = "color: green;"
            }
        },*/
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

</style>