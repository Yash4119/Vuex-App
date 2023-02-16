// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc,  deleteDoc, doc, query, where, getDocs} from "firebase/firestore";
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

const usersref = collection(db,'users');

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

export const delData = async () => {
  try {
    const users = query(usersref, where('name' , '==', 'Yash'));
    console.log(users);
    
    users.forEach((docc) => {
      deleteDoc(doc(usersref, docc.id));
    })
  } catch (error) {
    console.log(error)
  }
}

export const getData = async () => {
  try {
    const q = await getDocs(usersref);
    
    const users = [];
    q.forEach((docc) => {
      console.log(docc)
      users.push([
                  docc.id,
                  docc._document.data.value.mapValue.fields.name.stringValue,
                  docc._document.data.value.mapValue.fields.email.stringValue
                ])
    })
    // console.log(typeof(users));
    return users
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// deleteDoc(db,'users')

getData();

export default (app,usersref);
