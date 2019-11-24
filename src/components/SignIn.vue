<template>
  <div class="container">
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-row>
        <b-col lg="1" class="pb-2">
          <b-button pill v-on:click.prevent="submit" type="submit" variant="primary"
            >Submit</b-button
          >
        </b-col>
        <b-col lg="2" class="pb-2"
          ><router-link :to="'/signup'"
            ><b-button pill type="submit" variant="primary"
              >Sign up</b-button
            ></router-link
          ></b-col
        >
      </b-row>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submit() {
      axios.post('http://localhost:5000/login', this.form).then(res => {
        if (res.data.msg) {
          console.log('Ne moze');
        } else {
          this.$cookie.set('user-token', res.data.token, { expires: '2h' });
          this.$router.push('/posts');
        }
      }).catch(err => console.log(err));
    }
  }
};
</script>
<style scoped>
.container {
  margin-top: 50px;
  margin-left: 250px;
}
</style>
