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
    addMoney: (state) => {
      state.checkingAccountValue = state.checkingAccountValue + 10;
    },
    subtractMoney: (state) => {
      state.checkingAccountValue = state.checkingAccountValue - 10;
    }, // These are the actions you can dispatch in UI components. They will always have state and
    // action parameters. The value of the state parameter is supplied by Redux
  },
});

export const { addMoney, subtractMoney } = checkingAccount.actions;

export default checkingAccount;
