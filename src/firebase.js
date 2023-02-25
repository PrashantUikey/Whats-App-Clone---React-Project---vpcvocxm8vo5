import firebase from "firebase"

const firebaseConfig = {
    //place your firebase config here
    apiKey: "AIzaSyBKmkTZEKWgDf6LApXQ8tHcskHHh55ANtc",
  authDomain: "whatsapp-clone-a2fc1.firebaseapp.com",
  projectId: "whatsapp-clone-a2fc1",
  storageBucket: "whatsapp-clone-a2fc1.appspot.com",
  messagingSenderId: "925832685063",
  appId: "1:925832685063:web:15b1290fb9585fb3066ca2",
  measurementId: "G-F4YTPZFMB5"
  };

  //this special line of code connects everything
  const firebaseApp =  firebase.initializeApp(firebaseConfig);


  //this is for database connection
  const db = firebaseApp.firestore();


  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;