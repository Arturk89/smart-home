// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const firestoreDb = getFirestore(app)
export const auth = getAuth(app)

export default firestoreDb
