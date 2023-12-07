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
  };

  const transferFromCheckingAccount = () => {
    const amount = 10;
    dispatch(transferFromChecking(amount));
    dispatch(transferToSavings(amount));
    console.log(transferFromCheckingAccount);
  };

  return (
    <div>
      <div className="transferContainer">
        <div className="transferBox">
          <h3>Transfer Money between accounts</h3>
          <button onClick={transferToCheckingAccount}>
            To checking account
          </button>
          <br></br>
          <br></br>
          <button onClick={transferFromCheckingAccount}>
            To savings account
          </button>
        </div>
      </div>
    </div>
  );
}
