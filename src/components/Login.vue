<template>
  <div id="login">
    <h1>Авторизация:</h1>
    <form>
      <label for="username">Имя пользователя:</label>
      <input id="username" type="text" v-model="username">
      <label for="password">Пароль:</label>
      <input id="password" type="password" v-model="password">
      <input type="submit" value="Войти" @click="signIn">
    </form>
    <p>{{message}}</p>
  </div>
</template>

<script>

export default {
  name: 'SignIn',
  data: () => ({
    username: '',
    password: '',
    message: ''
  }),
  methods: {
    signIn: function (event) {
      event.preventDefault()
      if (this.password === '12345') {
        alert('Successfully Sign IN')
        this.$store.commit('authenticated', this.username)
        this.$router.push('tasks')
        return
      }
      this.message = 'Неправильное имя пользователя или пароль'
      this.username = ''
      this.password = ''
    }
  },
  beforeCreate () {
    document.title = this.$route.meta.title
  }
}
</script>

<style scoped>
#login {
  margin: 0;
  background: whitesmoke;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
</style>
