import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "./Firebase.config";
// One time execution only
// import { seedDatabase } from "../Seed";

const firebase = Firebase.initializeApp(firebaseConfig);

// Seed the database
// One time execution only
// seedDatabase(firebase);

export { firebase };
