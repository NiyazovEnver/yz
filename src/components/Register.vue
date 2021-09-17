<template>
  <div class="register">
          <div class="register__wrapper">
            <div class="register-container">
    <h1>Register</h1>
    <form class="register__form" @submit.prevent="register">
      <p class="register__input-field">
      <label class="visually-hidden" for="name">Name</label>

        <input class="register__input" id="name" type="text" v-model="name" placeholder="Имя" required autofocus>
      </p>
      <p class="register__input-field">
      <label for="email" class="visually-hidden" >E-Mail Address</label>

        <input class="register__input" id="email" type="email" v-model="email" placeholder="E-Mail" required>
      </p>
      <p class="register__input-field">
      <label for="password" class="visually-hidden">Password</label>

        <input class="register__input" id="password" type="password" v-model="password" placeholder="Пароль" required>
     </p>
     <p class="register__input-field">
      <label for="password-confirm" class="visually-hidden">Confirm Password</label>

          <input class="register__input" id="password-confirm" type="password" placeholder="Подтвердите пароль" v-model="password_confirmation" required>
      </p>
      <div class="register__submit">
          <button class="btn register__submit-btn" type="submit">Register</button>
      </div>
    </form>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
    .register{
        display: block;
    }
</style>

<script>
    export default {
        props : ["nextUrl"],
        data(){
            return {
                name : "",
                email : "",
                password : "",
                password_confirmation : "",
                is_admin : null
            }
        },
        methods : {
            register: function () {
                let data = {
                name: this.name,
                email: this.email,
                password: this.password,
                is_admin: this.is_admin
                }
                this.$store.dispatch('register', data)
                .then(() => this.$router.push('/'))
                .catch(err => console.log(err))
            },
            handleSubmit(e) {
                e.preventDefault()

                if (this.password === this.password_confirmation && this.password.length > 0)
                {
                    let url = "http://localhost:3000/register"
                    if(this.is_admin != null || this.is_admin == 1) url = "http://localhost:3000/register-admin"
                    this.$http.post(url, {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        is_admin: this.is_admin
                    })
                    .then(response => {
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else{
                                this.$router.push('/')
                            }
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
                } else {
                    this.password = ""
                    this.passwordConfirm = ""

                    return alert("Passwords do not match")
                }
            }
        }
    }
</script>
