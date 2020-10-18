<template>
  <div class="hello page">
    <h1>{{ msg }}</h1>

    <h3>Vladimir Jesen Villa Tobias</h3>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Enjoy the demo",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
