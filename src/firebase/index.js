import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCJNpmsZLNHzLtbBfsN0_HXR7la-aMndyA",
  authDomain: "vue-test-ec071.firebaseapp.com",
  projectId: "vue-test-ec071",
  storageBucket: "vue-test-ec071.appspot.com",
  messagingSenderId: "739052319423",
  appId: "1:739052319423:web:2062c17ef4ea65124f0c0a"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }