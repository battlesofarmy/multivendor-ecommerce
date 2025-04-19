import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from "../../lib/fireBase.Config";
import { doc, setDoc, getDoc } from "firebase/firestore"; // for Firestore
import { db } from "../../lib/fireBase.Config"; // ✅ named import



// Register User
// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       if (user) {
//         return {
//           uid: user.uid,
//           email: user.email,
//           displayName: user.displayName,
//         };
//       } else {
//         return null;
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async ({ email, password, displayName, photoURL, phoneNumber }, { rejectWithValue }) => {
//     try {
//       // Create the user with email and password
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log(phoneNumber , " number")

//       const number = toString(phoneNumber);
//       // Update Firebase profile with displayName and photoURL
//       if (user) {
//         await updateProfile(user, {
//           phoneNumber: number,
//           displayName, // Update displayName
//           photoURL,    // Update photoURL
//         });

//         // Returning user data without phone number since it's not directly stored in Firebase Auth
//         return {
//           uid: user.uid,
//           email: user.email,
//           displayName: user.displayName,
//           photoURL: user.photoURL,
//           phoneNumber: user.phoneNumber, // This will be null until phone verification occurs
//         };
//       } else {
//         return null;
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, displayName, photoURL, phoneNumber }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName,
        photoURL,
      });

      // // Immediately store custom fields in Firestore
      // await setDoc(doc(db, "users", user.uid), {
      //   email,
      //   displayName,
      //   photoURL,
      //   phoneNumber,
      //   role: "user", // custom field!
      // });


      const userData = {
        email: email ?? "",
        displayName: displayName ?? "",
        photoURL: photoURL ?? "",
        phoneNumber: phoneNumber ?? "",
        role: "user",
      };
      
      
      console.log("📤 Sending to Firestore:", userData);
      
      await setDoc(doc(db, "users", user.uid), userData);
      

      return {
        uid: user.uid,
        email,
        displayName,
        photoURL,
        phoneNumber,
        role: "user" // 🔥 fixed
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);




// Login User
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //   return userCredential.user;
      const { uid, email: userEmail, displayName } = userCredential.user;
      return { uid, email: userEmail, displayName }; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Logout
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Listen to Auth Changes
// export const observeAuthState = createAsyncThunk(
//   "auth/observeAuthState",
//   async (_, { dispatch }) => {
//     return new Promise((resolve) => {
//       onAuthStateChanged(auth, (user) => {
//         resolve(user || null);
//       });
//     });
//   }
// );



// export const observeAuthState = createAsyncThunk(
//   "auth/observeAuthState",
//   async (_, { rejectWithValue }) => {
//     console.log("Auth Observer Triggered 🔥");
//     return new Promise((resolve, reject) => {
//       onAuthStateChanged(auth, (currentUser) => {
//         console.log("onAuthStateChanged result:", currentUser);
//         if (currentUser) {
//           // resolve({
//           //   email: currentUser.email,
//           //   uid: currentUser.uid,
//           // });
//           resolve({
//             email: currentUser.email,
//             uid: currentUser.uid,
//             displayName: currentUser.displayName,
//             photoURL: currentUser.photoURL,
//             phoneNumber: currentUser.phoneNumber, // Optional if set
//           });
//         } else {
//           resolve(null);
//         }
//       });
//     });
//   }
// );




export const observeAuthState = createAsyncThunk(
  "auth/observeAuthState",
  async (_, { rejectWithValue }) => {
    console.log("Auth Observer Triggered 🔥");

    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
          try {
            // Get extra fields from Firestore
            const userDocRef = doc(db, "users", currentUser.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
              const firestoreData = userDocSnap.data();

              resolve({
                uid: currentUser.uid,
                email: currentUser.email,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
                ...firestoreData, // includes phoneNumber, role, etc.
              });
            } else {
              // fallback if Firestore doc not found
              resolve({
                uid: currentUser.uid,
                email: currentUser.email,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
              });
            }
          } catch (err) {
            console.error("❌ Firestore fetch error:", err.message);
            reject(err.message);
          }
        } else {
          resolve(null);
        }
      });
    });
  }
);
