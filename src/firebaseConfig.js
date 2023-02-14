// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB6ufsjvr0Z7m5GXlp1gFlspr0ATAp-2wM",
  authDomain: "vuex-app-5e3ec.firebaseapp.com",
  projectId: "vuex-app-5e3ec",
  storageBucket: "vuex-app-5e3ec.appspot.com",
  messagingSenderId: "834412071430",
  appId: "1:834412071430:web:29f9a085e64fbdcba19187"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app