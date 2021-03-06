import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVM_T80x33rHseVdQVd2AUgWr0J02lLm4",
  authDomain: "nextfireblog-58e43.firebaseapp.com",
  projectId: "nextfireblog-58e43",
  storageBucket: "nextfireblog-58e43.appspot.com",
  messagingSenderId: "368693362098",
  appId: "1:368693362098:web:f36862ad0e9131aff2f8ab",
  measurementId: "G-LQ4QYN2JG5",
};

// next.js calls firebase twice so the if statements makes sure it's called once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;

// helper funcs

/**
 * gets a users/{uid} document with username
 * @param {string} username
 */

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**
 * converts a firestore doc to json
 * @param {DocumentSnapshot} doc
 */

export function postToJSON(doc) {
  const data = doc.data();
  return {
    // firestore timestamp are NOT serializable to date
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.createdAt.toMillis(),
  };
}
