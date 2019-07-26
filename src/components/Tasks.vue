<template>
    <div>
      <router-link v-if="this.$store.state.authenticated" to="/login" replace><p @click="click">Logout</p></router-link>
      <h1>Tasks</h1>
    </div>
</template>

<script>
export default {
  name: 'Tasks',
  methods: {
    click: function () {
      console.log('click')
      this.$store.commit('logout')
    }
  }
}
</script>

<style scoped>

</style>
