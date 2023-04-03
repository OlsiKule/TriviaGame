// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: 'AIzaSyDzrqSaLojWE-XBxXXPKZTnLUZA8jk4JKA',
	authDomain: 'project4-e3a2b.firebaseapp.com',
	projectId: 'project4-e3a2b',
	storageBucket: 'project4-e3a2b.appspot.com',
	messagingSenderId: '105176021270',
	appId: '1:105176021270:web:a52117878497a7e83a3837',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;
