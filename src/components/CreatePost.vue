<template>
  <div class="container dole">
            <h4>Create post </h4> 
            <h5>{{this.message}}</h5>
            <form>
                <div class="form-group levo">
                    <label for="comment">Post:</label>
                    <textarea name="text" v-model="form.post" class="form-control" rows="1" id="comment" placeholder="Write Post"></textarea>
                    <label for="comment">Price:</label>
                    <textarea name="title" v-model="form.price" class="form-control" rows="1" id="title" placeholder="Price"></textarea>
                </div>

                <button @click.prevent="submit" class="btn btn-primary float-right">Submit</button>
                <!-- <router-link :to="`/post/${this.id}`" class="btn btn-primary float-left"> Return to post </router-link> -->
            </form>
        </div>
</template>

<script>

import axios from 'axios';

export default {

    name: "CreatePost",
    // props: ["id"],
    data: function(){
        return {
            form: {
                price: "",
                post: ""
            },
            message: ""
        }
    },
    methods:{
        submit: function() { ///post/:id/comments/add

            if(this.form.post.length < 1 || this.form.price.length < 1) {
                this.message = '- you cannot leave empty fields - '
            } else {
                axios.post(`http://localhost:5000/posts`, this.form)
                .then(response => {
                    response;
                    this.$router.push('/posts');
                })
                .catch(err => {
                    console.log(err);
                })
            }
        }
    }
}
</script>

<style>

    h4 {
        text-align: left;
    }

    .dole {
        margin-top: 5%;
    }

    .levo {
        text-align: left;
    }

</style>