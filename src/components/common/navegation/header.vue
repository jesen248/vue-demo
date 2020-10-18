<template>
  <div>
    <header class="cs-header navbar navbar-expand-lg navbar-dark navbar-floating navbar-sticky">
      <div class="container px-0 px-xl-3">
        <!--button class="navbar-toggler ml-n2 mr-2" type="button" data-toggle="offcanvas" data-offcanvas-id="primaryMenu">
          <span class="navbar-toggler-icon"></span>
        </button-->
        <a class="navbar-brand order-lg-1 mx-auto ml-lg-0 pr-lg-2 mr-lg-4" href="index.html">
          <img class="navbar-floating-logo d-none d-lg-block" width="153" src="./../../../../public/img/logo.png" alt="Around">
          <img class="navbar-stuck-logo d-lg-none" width="153" src="./../../../../public/img/logo.png" alt="Around">
          <!--img class="d-lg-none" width="58" src="./../../../../public/img/logo.png" alt="Around"-->
        </a>
        <Navbar/>
      </div>
        
    </header>
  </div>
</template>

<script>
import Navbar  from './nav'
export default {
  data() {
    return{

    }
  },
  components:{
    Navbar
  }
};
</script>

<style scoped>
  .header{
    margin: 0%;
    padding: 20px;
    flex: 0 1 auto;
  }
</style>