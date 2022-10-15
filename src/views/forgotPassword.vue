<template>
  <div class="container">
    <form @submit.prevent="forgotPassword">
      <div class="form-group">
        <label for="">Email</label>
        <input type="email" class="form-control" v-model="user.email"/>
      </div>
      <button type="submit" class="btn btn-primary">resetpass</button>
    </form>
  </div>
</template>

<script>
import firebase from '../firebase'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

firebase

const auth = getAuth();

export default {
  data() {
    return{
      user:{
        email:''
      }
    }
  },
  methods:{
    forgotPassword(){
      sendPasswordResetEmail(auth, this.user.email)
      .then(()=>{
        alert('check your emailbox')
        this.user = {
          email: ''
        }
      })
      .catch((error)=>{
        console.log(error.message)
      })
    }
  }
}
</script>
