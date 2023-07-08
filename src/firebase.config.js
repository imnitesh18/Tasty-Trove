import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtxXNx316m5QscUvtTMvAAQU60fCoxZOc",
  authDomain: "restaurantapp-2645d.firebaseapp.com",
  databaseURL: "https://restaurantapp-2645d-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-2645d",
  storageBucket: "restaurantapp-2645d.appspot.com",
  messagingSenderId: "815571296035",
  appId: "1:815571296035:web:5cfa9b24456b0598633696",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
