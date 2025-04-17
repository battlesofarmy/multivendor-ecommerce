import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../../lib/fireBase.Config";

// Register User
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //   return userCredential.user;
         const { uid, email, displayName } = userCredential.user || {};
         return userCredential.user ? { uid, email, displayName } : null;
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
export const observeAuthState = createAsyncThunk(
  "auth/observeAuthState",
  async (_, { dispatch }) => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        resolve(user || null);
      });
    });
  }
);
