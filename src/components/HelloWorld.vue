<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <small>
      时不可及，日不可留
    </small>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 20px auto;
  letter-spacing:7px;
  text-shadow: 3px 3px 3px #979797;
}
small{
  color: #979797;
  text-shadow: 1px 1px 1px #333;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
