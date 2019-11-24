<template>
  <div class="container">
    <b-card bg-variant="dark" text-variant="white">
      <h4>{{ post.post }}</h4>
      <b-card-text>
        {{ post.post }}
      </b-card-text>
      <b-button pill variant="primary">{{ post.price }}</b-button>
      <b-button pill v-on:click.prevent="deletePost" variant="warning"
        >Delete</b-button
      >
    </b-card>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  props: ['post'],

  methods: {
    deletePost() {
    console.log(this.post._id);
      axios
        .delete('http://localhost:5000/posts/' + this.post._id, this.form)
        .then(res => {
          if (res.data.msg) {
            this.Message = res.data.msg;
          } else {
            window.location.reload();
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style scoped>
.container {
  margin-top: 15px;
}
</style>
