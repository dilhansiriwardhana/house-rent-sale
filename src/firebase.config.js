import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAku_LbYAC41JMzv3WftylCwRTneqsn5d0",
  authDomain: "house-marketplace-app-1eb5c.firebaseapp.com",
  projectId: "house-marketplace-app-1eb5c",
  storageBucket: "house-marketplace-app-1eb5c.appspot.com",
  messagingSenderId: "10536575342",
  appId: "1:10536575342:web:655ca0c4b9bc6b8d81617f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()