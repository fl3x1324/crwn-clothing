import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBukxKK0A3txQ_dOuXCDuZ6HKoHZcJymVI",
  authDomain: "crwn-clothing-1b644.firebaseapp.com",
  projectId: "crwn-clothing-1b644",
  storageBucket: "crwn-clothing-1b644.appspot.com",
  messagingSenderId: "936691857824",
  appId: "1:936691857824:web:3ea02c42ed694b4a7c8cc5",
  measurementId: "G-F6CSH09X8C",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
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
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

export const updateLastLogin = async (userId, lastLogin) => {
  if (!lastLogin || !userId) return;
  const userRef = firestore.doc(`/users/${userId}`);
  const snapShot = await userRef.get();
  if (snapShot.exists) {
    userRef.update({ lastLogin });
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
