<template>
<div class="login">
    <div class="login__wrapper">
        <div class="login-container">
            
                <form class="login__form" @submit.prevent="login">
                    <h1>Авторизация</h1>
                    <p class="login__input-field">
                        <label class="visually-hidden">Email</label>
                        <input class="login__input" required v-model="email" type="email" placeholder="Name"/>
                    </p>
                    <p class="login__input-field">
                        <label class="visually-hidden">Password</label>
                        <input class="login__input" required v-model="password" type="password" placeholder="Password"/>
                    </p>
                    <button class="btn login__submit-btn" type="submit">Login</button>
                </form>
                <p class="login__registration">Вы ещё не зарегистрированы?</p><router-link class="login__registration-link" to="/register">Зарегистрируйтесь</router-link>
        
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return {
                email : "",
                password : ""
            }
        },
        methods : {
            login: function () {
                let email = this.email
                let password = this.password
                this.$store.dispatch('login', { email, password })
                .then(() => this.$router.push('/'))
                .catch(err => console.log(err))
            },
            handleSubmit(e){
                e.preventDefault()
                if (this.password.length > 0) {
                    this.$http.post('http://localhost:3000/login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        let is_admin = response.data.user.is_admin
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else {
                                if(is_admin== 1){
                                    this.$router.push('admin')
                                }
                                else {
                                    this.$router.push('dashboard')
                                }
                            }
                        }
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                }



            }
        }
    }
</script>
