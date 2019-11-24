<template>
  <div>
    <div class="container">
        <div class="napaz mb-4 mt-4">
      <router-link :to="`/postCreate`" class="btn btn-primary"> Create a post </router-link>
    </div>
    </div>
    <div v-bind:key="post.id" v-for="post in posts">
      <Post v-bind:post="post" />
    </div>
  </div>
</template>

<script>
import Post from './Post';
import axios from 'axios';
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
      .get('http://localhost:5000/posts')
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
