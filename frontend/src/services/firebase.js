import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Initializes Firebase App
// Connects firebase to the view app
const firebaseConfig = {
    apiKey: "AIzaSyDpXN8tMm8gQTshm2JqKJF6Hs28DF3wD0M",
    authDomain: "walkie-talkie-6b4ac.firebaseapp.com",
    projectId: "walkie-talkie-6b4ac",
    storageBucket: "walkie-talkie-6b4ac.appspot.com",
    messagingSenderId: "818191323817",
    appId: "1:818191323817:web:259018e5f86aff52e1cfb8",
    measurementId: "G-0DMXXVS16H"
};
firebase.initializeApp(firebaseConfig)


// Create Firebase Components
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

// Export Components
export {
    db,
    auth,
    storage
}



