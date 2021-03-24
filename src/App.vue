<template>
  <div id="app">
    <TabBar></TabBar>
    <router-view/>
  </div>
</template>

<script>
import TabBar from "./components/TabBar"
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
  .container{
    margin: 2rem;
  }
</style>
