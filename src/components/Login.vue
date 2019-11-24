<template>
  <!-- Material form login -->
  <div class="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
      <h3 class="text-center">Log in</h3>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          v-model="form.email"
          placeholder="email"
          required="required"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          v-model="form.password"
          placeholder="password"
          required="required"
        />
      </div>
      <div class="form-group">
        <button @click.prevent="submit" class="btn btn-primary btn-block">
          Lets go
        </button>
      </div>
      <!-- <router-link to="/register">Register</router-link> -->
    </form>
    <p>{{ form }}</p>
  </div>
  <!-- Material form login -->
</template>

<script>
// import { log } from 'util'
// import { CLIENT_RENEG_WINDOW } from 'tls'
import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.withCrendentails = true;
window.axios = axios;

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      form: {
        email: 'dusangp@gmail.com',
        password: 'dusan123'
      },
      message: null
    };
  },
  methods: {
    submit: function() {
    //   const promise = fetch('http://127.0.0.1:5000/login', {
    //     email: 'dusangp@gmail.com',
    //     password: 'dusan123'
    //   });
    //   const promise = fetch('http://127.0.0.1:5000/login', {
    //     method: 'POST', // or 'PUT'
    //     body: JSON.stringify({
    //     email: 'dusangp@gmail.com',
    //     password: 'dusan123'
    //   }), // data can be string or {object}!
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });

    //   promise
    //     .then(response => {
    //       console.log(response);

    //       //   return response.json();
    //     })
    //     .then(data => {
    //       console.log('data:', data);
    //       //   setProducts(data);
    //       //   setLogin();
    //     });
        axios
          .post('http://127.0.0.1:5000/login', {
            email: 'dusangp@gmail.com',
            password: 'dusan123'
          })
          .then(
            response => {
              console.log(response);
            },
            error => {
              console.log(error);
            }
          );
      console.log('dusan');
      // console.log('asdas');
      //   await axios
      //     .post('http://localhost:5000/login', {
      //         email: 'dusangp@gmail.com',
      //       password: 'dusan123'
      //     }) //http://localhost:5000/login
      //     .then(res => {
      //         this.message = res.data;
      //       console.log(res);

      //       //this.$router.push("/");
      //     })
      //     .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.login-form {
  width: 340px;
  margin: 50px auto;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(228, 207, 207, 0.3);
  padding: 30px;
}
.login-form h2 {
  margin: 0 0 15px;
}
.form-control,
.btn {
  min-height: 38px;
  border-radius: 2px;
}
.btn {
  font-size: 15px;
  font-weight: bold;
}
h3 {
  padding-bottom: 10;
}
</style>
