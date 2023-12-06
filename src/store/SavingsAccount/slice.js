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
  }, // The names of these keys in initialState will be used in selector definitions
  reducers: {
    transferMoneyToCheckingAccount: (state) => {
      //state. ? how to write logic to increase whats subtracted in savingsAccount to checking account?
    },
    transferMoneyFromCheckingAccountToSavingsAccount: (state) => {
      //state. ? how to write logic to increase whats subtracted in checkingAccount to savings account?
    },
  }, // These are the actions you can dispatch in UI components. They will always have state and
  // action parameters. The value of the state parameter is supplied by Redux
});

export const {
  transferMoneyToCheckingAccount,
  transferMoneyFromCheckingAccountToSavingsAccount,
} = savingsAccount.actions;

export default savingsAccount;
