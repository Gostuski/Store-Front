<template>
  <div id="app">
    <Header/>
    <router-view/>
    <!-- <SignIn/>
    <SignUp/> -->
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    Header,
  },
  data() {
    return {
      posts: []
    };
  }
};
</script>

<style></style>
