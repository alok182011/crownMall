import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCfn_FWjOiy-gTuZC-c0Ugpj9NtyrveIys",
  authDomain: "crown-db-cae3d.firebaseapp.com",
  databaseURL: "https://crown-db-cae3d.firebaseio.com",
  projectId: "crown-db-cae3d",
  storageBucket: "crown-db-cae3d.appspot.com",
  messagingSenderId: "826944928295",
  appId: "1:826944928295:web:a180e7bf94fbf34b92ec02",
  measurementId: "G-TVMJ9923CC",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      alert("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
