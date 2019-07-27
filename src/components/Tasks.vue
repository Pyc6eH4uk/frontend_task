<template>
  <div>
    <div v-if="logged_in">
      <router-link to="/login" replace><p @click="click">Выйти</p></router-link>
      <h1>Tasks</h1>
    </div>
    <div v-if="!logged_in">
      <router-link to="/login" replace>Авторизоваться</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tasks',
  data: () => ({
    logged_in: false
  }),
  beforeMount () {
    this.$route.meta.title = this.$store.state.username
    document.title = this.$route.meta.title
    this.logged_in = this.$store.state.authenticated
  },
  methods: {
    click: function () {
      this.$store.commit('logout')
    }
  }
}
</script>

<style scoped>

</style>
