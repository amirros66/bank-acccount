//Set up step 6 -Set up your slice with initialState and empty actions

// ### Feature 1 - Adding and Withdrawing money
// Our accounts are not static, we always interact with them by either receiving money, making
//transfers, paying bills, etc. To keep our app simple, we can summarize these transactions in
//two categories: adding and subtracting money. For this feature, add the following
//functionalities:
// - Add money to the checking account
// - Subtract money from the checking account
// - Note! the state has to be managed by Redux

import { createSlice } from "@reduxjs/toolkit";

const checkingAccount = createSlice({
  name: "checkingAccount",
  initialState: {
    checkingAccountValue: 1000,
  }, // The names of these keys in initialState will be used in selector definitions
  reducers: {
    addMoney: (state, action) => {
      const amount = action.payload;
      state.checkingAccountValue += amount; //this payload allows user to input any amount
    },
    subtractMoney: (state, action) => {
      const amount = action.payload;
      state.checkingAccountValue -= amount;
    },
    transferToSavings: (state, action) => {
      const amount = action.payload;
      state.checkingAccountValue -= amount;
    },
  },
});

export const { addMoney, subtractMoney, transferToSavings } =
  checkingAccount.actions;

export default checkingAccount.reducer;
