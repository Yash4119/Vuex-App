// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB6ufsjvr0Z7m5GXlp1gFlspr0ATAp-2wM",
  authDomain: "vuex-app-5e3ec.firebaseapp.com",
  projectId: "vuex-app-5e3ec",
  storageBucket: "vuex-app-5e3ec.appspot.com",
  messagingSenderId: "834412071430",
  appId: "1:834412071430:web:29f9a085e64fbdcba19187",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const putData = async() => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Yash",
      last: "Coder",
      born: 2000
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const getData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().first}`);
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

putData();
getData();

export default app;
