<template>
  <div class="container">
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
        ><b-form-input
          id="input-1"
          required
          v-model="form.name"
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
        description="We'll never share your email with anyone else."
        ><b-form-input
          id="input-2"
          v-model="form.email"
          required
          type="email"
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="password"
          required
          v-model="form.password"
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Confirm password:" label-for="input-3">
        <b-form-input
          id="input-4"
          required
          type="password"
          v-model="form.password2"
          placeholder="Confirm password"
        ></b-form-input>
      </b-form-group>
      <b-button pill v-on:click.prevent="register" type="submit" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        password2: '',
        name: ''
      }
    };
  },
  methods: {
    // onSubmit(evt) {
      //   alert(JSON.stringify(this.form));
    // },
    register(){
      axios.post('http://localhost:5000/register', this.form).then(res => {
        if (res.data.msg) {
          console.log('Ne moze');
        } else {
          this.$router.push('/signin');
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
