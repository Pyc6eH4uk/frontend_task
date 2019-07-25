<template>
  <div id="app">
    <router-link v-if="authenticated" to="/login" replace>Logout</router-link>
    <router-view @authenticated="setAuthenticated"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      authenticated: false
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({name: 'login'})
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    }
  }
}
</script>

<style>
</style>
