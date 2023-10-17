import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBD0q_DioqDiqLZQdZDU5nAgjqCPoX5euQ",
  authDomain: "clothing-db-30abb.firebaseapp.com",
  projectId: "clothing-db-30abb",
  storageBucket: "clothing-db-30abb.appspot.com",
  messagingSenderId: "251747199255",
  appId: "1:251747199255:web:1159832f65523e6a9f6f52",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
