<template>
  <div class="container">
    <b-card bg-variant="dark" text-variant="white">
      <h4>{{post.post}}</h4>
      <b-card-text>
        {{ post.post }}
      </b-card-text>
      <b-button pill variant="primary">{{ post.price }}</b-button>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ['post']
};
</script>
<style scoped>
.container {
  margin-top: 15px;
}
</style>
