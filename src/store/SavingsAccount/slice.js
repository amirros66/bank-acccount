//Set up step 6 -Set up your slice with initialState and empty actions

// ### Feature 5 - Savings Account
// - Add the functionality to transfer money from savings account to checking account and vice-versa
// - Note! the state has to be managed by Redux
// > **Constraint:** You can not transfer more money than it's available in any of the accounts.
// None of them can go under 0.

import { createSlice } from "@reduxjs/toolkit";

const savingsAccount = createSlice({
  name: "savingsAccount",
  initialState: {
    savingsAccountValue: 8000,
  },
  reducers: {
    transferToChecking: (state, action) => {
      const amount = action.payload;
      state.savingsAccountValue -= amount;
    },
    transferFromChecking: (state, action) => {
      const amount = action.payload;
      state.savingsAccountValue += amount;
    },
  },
});

export const { transferToChecking, transferFromChecking } =
  savingsAccount.actions;

export default savingsAccount.reducer;
