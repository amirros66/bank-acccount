import React from "react";
import { useDispatch } from "react-redux";
// import {
//   transferMoneyToCheckingAccount,
//   transferMoneyFromCheckingAccountToSavingsAccount,
// } from "./store/SavingsAccount/slice";

//Feature 5 - Savings Account *TRANSFERS*
//transfer money from savings account to checking account and vice-versa
// **Constraint:** You can not transfer more money than it's available in any of the accounts.
// None of them can go under 0.

// When money is subtracted or added to this savings account via transfers this should be updated
// and displayed at the top of the app.

//Transfer / send money heading
//Amount heading with input field
//To savings account / to checkings account buttons.

export default function Transfer() {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Transfer Money</h3>
      {/* <button
        onClick={() => {
          dispatch(transferMoneyFromCheckingAccountToSavingsAccount());
        }}
      >
        Transfer from checking account to savings account
      </button>
      <button
        onClick={() => {
          dispatch(transferMoneyToCheckingAccount());
        }}
      >
        Transfer from savings to checking account
      </button> */}
    </div>
  );
}
