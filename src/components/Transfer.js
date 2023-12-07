import React from "react";
import { useDispatch } from "react-redux";
import {
  transferToChecking,
  transferFromChecking,
} from "../store/SavingsAccount/slice";
import { addMoney, transferToSavings } from "../store/CheckingAccount/slice";
import "./Transfer.css";

export default function Transfer() {
  const dispatch = useDispatch();

  const transferToCheckingAccount = () => {
    const amount = 10;
    dispatch(transferToChecking(amount));
    dispatch(addMoney(amount)); //this was the issue it was subtractMoney which was incorrect
    console.log(transferToCheckingAccount);
  }; //this logic is not working

  //transferToCheckingAccount:  want to remove from savings and add to checking

  const transferFromCheckingAccount = () => {
    const amount = 10;
    dispatch(transferFromChecking(amount));
    dispatch(transferToSavings(amount));
    console.log(transferFromCheckingAccount);
  };

  //this logic is working

  return (
    <div>
      <div className="transferContainer">
        <div className="transferBox">
          <h2>Transfer Money between savings account & checking account</h2>
          <button onClick={transferToCheckingAccount}>
            Add to checking account
          </button>
          {/* WHEN I CLICK THIS'Add to checking account' SAVINGS DECREASE BUT CHECKING
       ALSO DECREASES INSTEAD OF INCREASING*/}
          <button onClick={transferFromCheckingAccount}>
            Add to savings account
          </button>
        </div>
      </div>
    </div>
  );
}
