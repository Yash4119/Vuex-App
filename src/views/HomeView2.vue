<template>
  <div class="text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-5">
          <img src="../assets/logo.png" alt="" />
          <h1 class="mt-3">Welcome to my Vuex Application</h1>
          <div class="container row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4" v-if="isSignedIn">
              <!-- <button @click="addDataTo">Add Data</button> -->
              <form @submit.prevent="addDataTo">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    placeholder="Enter Your Email Id"
                  />
                </div>
                <button type="submit" class="btn btn-primary">Add Data</button>
              </form>
            </div>
            <div class="col-sm-4"></div>
          </div>
          <div class="container row" v-if="isSignedIn">
            <div class="col-md-12" >
              <h2 class="text-warning text-center">Data In Database</h2>
              <table
                class="table table-hover text-center table-striped my-3"
              >
                <thead class="bg-secondary text-white">
                  <th>Name</th>
                  <th>Email</th>
                  <th></th>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.id }}</td>
                    <td>
                      <button class="btn btn-danger" @click="delData(user.id)">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div v-else>
            <h1 class="text-center text-primary">SignIn to see all the registered users on the app</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-3">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 mt-5">
          <h2 v-if="user">Signed in User :- {{ user }}</h2>
          <div class="logout" v-if="isSignedIn">
            <button class="btn btn-warning" @click="handleSignOut">
              LogOut
            </button>
          </div>
          <div class="GoogleSignIn card" v-if="!isSignedIn">
            <h3 class="text-danger">Let's Get Started</h3>
            <button class="btn btn-primary" @click="handleSignInWithGoogle">
              SignIn with Google
            </button>
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
import { addData, getData, deleteData } from "../firebaseConfig";
firebaseConfig


export default {
  name: 'HomeView',
  data() {
    return {
      user: "",
      isSignedIn: false,
      name: "",
      email: "",
      id:null,
      users: null
    }
  },
  methods: {
    handleSignInWithGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {
          alert("Signed In Successfully")
          addData({ "name": result.user.displayName, "email": result.user.email,"id":result.user.uid });
          this.user = result.user.displayName
          this.isSignedIn = true
        }).catch((error) => {
          console.log(error);
        })
    },
    handleSignOut() {
      signOut(auth).then(() => {
        this.isSignedIn = false;
        this.user = ""
        alert("SignedOut Successful")
      }).catch((error) => {
        console.log(error)
      })
    },
    async addDataTo() {
      if (this.name !== '' && this.email !== '')
        await addData({ "name": this.name, "email": this.email });
        this.getDataTo()
    },
    async getDataTo() {
      try {
        const data = await getData()
        this.users = data
      } catch (error) {
        console.log(error);
      }
    },
    async delData(uid) {
      try {
        console.log("Before")
        await deleteData(uid);
        console.log("After")
        this.getDataTo();
      } catch (error) {
        console.log(error)
      }
    }
  },
  created(){
    this.getDataTo()
  }
}
</script>
<style>
.text-center {
  background-color: rgb(196, 241, 241);
}
</style>
