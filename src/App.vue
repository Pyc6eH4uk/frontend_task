<template>
  <div id="app">
    <router-view @authenticated="authenticated"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      // loggedIn: false
    }
  },
  computed: {
    authenticated () {
      return this.$store.state.authenticated
    },
    message () {
      return this.$store.state.message
    }
  }
}
</script>

<style>
</style>
