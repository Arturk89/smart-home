// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAEVo3hkHzthsQaG4e-ZzsyuhFU84HRBEo',
    authDomain: 'smart-home-90a3f.firebaseapp.com',
    projectId: 'smart-home-90a3f',
    storageBucket: 'smart-home-90a3f.appspot.com',
    messagingSenderId: '214880211173',
    appId: '1:214880211173:web:523b9c86a00a8b2fe3c40c'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const firestoreDb = getFirestore(app)
export const auth = getAuth(app)

export default firestoreDb
