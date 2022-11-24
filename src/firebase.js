import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDY1IgFCFCnEEbNU_qXg1aHIeSxXzzPjjk",
  authDomain: "login-25da4.firebaseapp.com",
  projectId: "login-25da4",
  storageBucket: "login-25da4.appspot.com",
  messagingSenderId: "369908493286",
  appId: "1:369908493286:web:240f08b8c9905dc5918427"
};

app.initializeApp(firebaseConfig);
const baseDatos= app.firestore()
const auth= app.auth()

export {baseDatos, auth, app}