// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs, deleteDoc, doc} from "firebase/firestore";
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


export const addData = async(user) =>{
  try{
    const res = await addDoc(collection(db, 'users'),{
      name : user.name,
      email : user.email
    });
    console.log(res);
  }catch(error){
    console.log(error)
  }
}

addData({name:"Yash",email:"Testing@gmail.com"});

export const getData = async () => {
  const snapshot = await getDocs(collection(db,'users'));
  const data = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))

  return data
};

export const deleteData= async(uid)=>{
  await deleteDoc(doc(db,'users',uid))
  console.log("Done",uid)
}

// deleteDoc(db,'users')


export default (db);
