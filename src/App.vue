<template>
  <div id="app">
    
    <Header/>
    <div id="main-conten">
        <router-view></router-view>
        <div class="">

        </div>
    </div>
    <Footer/>
    
  
  </div>
</template>

<script src="jquery.js"></script>
<script src="dist/jquery.inputmask.js"></script>
<script>
import HelloWorld from './components/pages/HelloWorld'
import Header from './components/common/navegation/header'
import Footer from './components/common/navegation/footer'
import Page from './components/pages/page'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Footer,
    Page
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: snow;
  margin-top: 0px;
  background-color: #2c3e50;
  display: flex;
  flex-flow: column;
  min-height: 100%;
}

#main-conten{
  flex: 1 1 auto;

}
html, body
{
  height: 100%;
  margin: 0;
  box-sizing: border-box;
}

.page{
  background-color:none;
}
</style>
