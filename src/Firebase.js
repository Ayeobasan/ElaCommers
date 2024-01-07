import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyBA_jqVD1--InyIphJcSqliydUQ7fwQHuI",
    authDomain: "elaproject-9b579.firebaseapp.com",
    projectId: "elaproject-9b579",
    storageBucket: "elaproject-9b579.appspot.com",
    messagingSenderId: "935599461253",
    appId: "1:935599461253:web:7d44c54670c53a79676aec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app