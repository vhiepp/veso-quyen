// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { browserPopupRedirectResolver, browserSessionPersistence, getAuth, initializeAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDHFVsvkVBf8w5JhTG-_8zVTPhP78TC_8',
  authDomain: 'vesoquyen-85104.firebaseapp.com',
  projectId: 'vesoquyen-85104',
  storageBucket: 'vesoquyen-85104.appspot.com',
  messagingSenderId: '926890360532',
  appId: '1:926890360532:web:596fc2fc97cacd07450541',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: browserSessionPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
})
auth.languageCode = 'it'
export { auth }
export default app
