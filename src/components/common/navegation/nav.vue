<template>
  <div class="order-lg-2 mx-auto mr-lg-0 pl-lg-2 ml-lg-4">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="btn btn-info mr-2">
        <router-link to="/"> Home </router-link>
      </div>
      <div class="btn btn-info mr-2">
        <router-link to="/Hello"> Hello </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.btn-info a{
  color:snow;
  text-decoration: none;
}

.navbar-brand:hover{
  color:violet;

}
</style>