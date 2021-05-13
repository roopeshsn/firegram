import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCf5USnVYF3dF3Bmh81YTIRYhvwSEiQRNE",
  authDomain: "firegram-6f063.firebaseapp.com",
  projectId: "firegram-6f063",
  storageBucket: "firegram-6f063.appspot.com",
  messagingSenderId: "791343031062",
  appId: "1:791343031062:web:803ca673127fa356212637",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const logOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export { projectStorage, projectFirestore, timestamp, auth };
