<template>
  <div class="text-center">

    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-5">
          <img src="../assets/logo.png" alt="">
          <h1 class="mt-3">Welcome to my Vuex Application</h1>
          <!-- <div id="firebaseui-auth-container"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-12 mt-5">
                <h2 v-if="user">Signed in User :- {{ user }} </h2>
                <div class="logout" v-if="isSignedIn">
                  <button class=" btn btn-warning" @click="handleSignOut">LogOut</button>
                </div>
              </div>
            </div>
          </div> -->
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
// import firebase from "firebase/compat/app"
// import * as firebaseui from 'firebaseui'
// import "firebaseui/dist/firebaseui.css"
// import { getAuth, signOut} from "firebase/auth"
import firebaseConfig from "../firebaseConfig"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth"
const auth = getAuth();
const provider = new GoogleAuthProvider();
firebaseConfig

// firebase.initializeApp(firebaseConfig)


// const uiConfig = {
//   signInFlow:'popup',
//   signInSuccessUrl: "http://localhost:8080/",
//   signInOptions: firebase.auth.GoogleAuthProvider.Provider_ID,
//   callbacks:{
//     signInSuccessWithAuthResult: function(authResult){
//       this.user.value = authResult.user.displayName;
//       this.isSignedIn = true;
//       alert("Signed In Successfully")
//       return false;
//     }
//   }
// }
// var ui = new firebaseui.auth.AuthUI(auth)
// ui.start("#firebaseui-auth-container",uiConfig)

export default {
  name: 'HomeView',
  // setup() {
  //   const user = "";
  //   const isSignedIn = false;
  //   const uiConfig = {
  //       signInFlow:'popup',
  //       signinSuccessUrl: "http://localhost:8080/",
  //       signInOptions: firebase.auth.GoogleAuthProvider.Provider_ID,
  //       callbacks:{
  //         signInSuccessWithAuthResult: function(authResult){
  //           user.value = authResult.user.displayName;
  //           isSignedIn.value = true;
  //           alert("Signed In Successfully")
  //           return false;
  //         }
  //       }
  //     };
  //     var ui = new firebaseui.auth.AuthUI(firebase.auth());
  //     ui.start("#firebaseui-auth-container",uiConfig);

  //     const handleSignOut = ()=>{
  //       signOut(auth).then(()=>{
  //         user.value = null
  //         alert("SignedOut Successful")
  //       }).catch((error)=>{
  //         console.log(error)
  //       })
  //     }

  //     return{
  //       user,
  //       isSignedIn,
  //       handleSignOut
  //     }
  data(){
    return{
      user:"",
      isSignedIn:false
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
    
  },
  
}
</script>
<style>
  .text-center{
    background-color: rgb(196, 241, 241);
  }
</style>
