//store (global store) - step 3 of set up

// THIS IS THE MAIN STORE FILE
// store = state + reducer
// A reducer is something that knows how to take initial state and modify it into a new state- the gardener
// A slice is like a mini store, it's a helper that comes from Redux Toolkit
// Because slices are mini stores, they also have state + reducer
// You can find slices in the slice.js files in src/store

import { configureStore } from "@reduxjs/toolkit";
// import reducers from the account/slice/js file here
import cardsReducer from "./Cards/slice";
import checkingAccountReducer from "./CheckingAccount/slice";
import savingsAccountReducer from "./SavingsAccount/slice";

// We create our store by calling a function called configureStore. This function creates a store
// for us and configures it with all the basic settings we are going to need.
const store = configureStore({
  reducer: {
    cards: cardsReducer,
    checkingAccount: checkingAccountReducer,
    savingsAccount: savingsAccountReducer,
  },
});

// This store is exported to be provided to the rest of the app in src/index.js
export default store;
