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
      if (this.username.toLowerCase() === 'ruslan' && this.password === '12345') {
        alert('Successfully Sign IN')
        this.$store.commit('authenticated')
        this.$router.push('tasks')
        return
      }
      this.message = 'Try AGAIN'
      this.username = ''
      this.password = ''
    }
  },
  beforeCreate () {
    if (this.$store.state.authenticated) {
      console.log('hereraaaa')
      this.$router.replace('tasks')
    }
    console.log('herer')
  }
}
</script>

<style scoped>
#login {

}
</style>
