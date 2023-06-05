import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const app = initializeApp({
	apiKey: 'AIzaSyAzuYC1rXlanGJStAqH6CrspNvNY-75Y9I',
	authDomain: 'cthapp-9696b.firebaseapp.com',
	projectId: 'cthapp-9696b',
	storageBucket: 'cthapp-9696b.appspot.com',
	messagingSenderId: '336310629520',
	appId: '1:336310629520:web:45c4d13b47a1d9ddab1415',
	measurementId: 'G-P9QF8429D2',
});
const auth = getAuth(app);

export { auth, GoogleAuthProvider, signInWithPopup };
