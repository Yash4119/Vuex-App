<template>
  <div class="text-center">

    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-5">
          <img src="../assets/logo.png" alt="">
          <h1 class="mt-3">Welcome to my Vuex Application</h1>
          <div class="container">
            <form @submit.prevent="addDataTo">
              <div class="form-group">
                <input type="text" class="form-control" v-model="name" placeholder="Enter Your Name">
              </div>
              <div class="form-group">
                <input type="email" class="form-control" v-model="email" placeholder="Enter Your Email Id">
              </div>
              <button type="submit" class="btn btn-primary">Add Data</button>
            </form>
          </div>
          <div class="container">
            <button @click="getDataTo">Get Data</button>
            <div class="col-md-6">
              <ul class="list-group">
                <li class="list-item" v-for="item in users" :key="item.id">{{ item.name }}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

    
    <div class="container my-3">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 mt-5">
          <h2 v-if="user">Signed in User :- {{ user }} </h2>
          <div class="logout" v-if="isSignedIn">
            <button class=" btn btn-warning" @click="handleSignOut">LogOut</button>
          </div>
          <div class="GoogleSignIn card " v-if="!isSignedIn">
            <h3 class="text-danger">Let's Get Started</h3>
            <button class=" btn btn-primary" @click="handleSignInWithGoogle">SignIn with Google</button>
          </div>
          <div class="col-md-4"></div>
        </div>
        <!-- <div class="col-md-4 mt-5">
          
        </div> -->
      </div>
    </div>
    
  </div>
</template>

<script>
import firebaseConfig from "../firebaseConfig"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth"
const auth = getAuth();
const provider = new GoogleAuthProvider();
import { addData, getData} from "../firebaseConfig";
firebaseConfig


export default {
  name: 'HomeView',
  data(){
    return{
      user:"",
      isSignedIn:false,
      name:"",
      email:"",
      users:{}
    }
  },
  methods:{
    handleSignInWithGoogle(){
      signInWithPopup(auth, provider)
        .then((result) => {
          alert("Signed In Successfully")
          this.user = result.user.displayName
          this.isSignedIn = true
        }).catch((error) => {
          console.log(error);
        })
    },
    handleSignOut(){
      signOut(auth).then(()=>{
        this.isSignedIn = false;
        this.user = ""
        alert("SignedOut Successful")
      }).catch((error)=>{
        console.log(error)
      })
    },
    addDataTo(){
      addData({"name":this.name, "email":this.email});
      this.name = "",
      this.email = ""
    },
    getDataTo(){
      this.users = getData();
      console.log(typeof(this.users))
      console.log(this.users);
    }
  },  
}
</script>
<style>
  .text-center{
    background-color: rgb(196, 241, 241);
  }
</style>
