<template>
  <div id="app">
    <template>
      <router-view />
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return { };
  },
  watch: { },
  mounted() { }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
