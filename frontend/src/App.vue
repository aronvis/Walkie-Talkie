<template>
  <div id = "app">
    <header>
      <h1>Vue Voxer</h1>
      <p>Realtime Voice Chat</p>
    </header>
    <div id="nav">
      <router-link to="/">Sign In</router-link>
    </div>
    <div class="cointainer">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
</style>
