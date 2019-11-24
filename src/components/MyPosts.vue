<template>
  <div>
    <div v-bind:key="post.id" v-for="post in posts">
        <Post v-bind:post="post"/>
    </div>
  </div>
</template>

<script>
import Post from './Post';
import axios from 'axios'
export default {
  components: {
    Post
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    axios
      .get('http://localhost:5000/userposts')
      .then(result => {
        this.posts = result.data;
        console.log(result.data);
      })
      .catch(err => {
        this.err = err;
      });
  }
};
</script>

<style></style>
