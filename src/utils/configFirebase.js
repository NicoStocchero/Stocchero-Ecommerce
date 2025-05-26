import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFb59jiyzpFk2WoYCo12O1mKdRJLuGdtY",
  authDomain: "stocchero-ecommerce.firebaseapp.com",
  projectId: "stocchero-ecommerce",
  storageBucket: "stocchero-ecommerce.firebasestorage.app",
  messagingSenderId: "1086481795692",
  appId: "1:1086481795692:web:c80f74d3d7126b31826649",
  measurementId: "G-1QT8RWZ29V",
};

export const createFirebaseApp = () => {
  initializeApp(firebaseConfig);
};
