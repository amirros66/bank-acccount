import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  transferToChecking,
  transferFromChecking,
} from "../store/SavingsAccount/slice";
import { addMoney, transferToSavings } from "../store/CheckingAccount/slice";
import "./Transfer.css";

// Constraint:You can not transfer more money than it's available in any of the accounts.
// None of them can go under 0.

export default function Transfer() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const transferToCheckingAccount = () => {
    dispatch(transferToChecking(amount));
    dispatch(addMoney(amount)); //this was the issue it was subtractMoney which was incorrect
    setAmount(0);
    console.log(transferToCheckingAccount);
  };

  const transferFromCheckingAccount = () => {
    dispatch(transferFromChecking(amount));
    dispatch(transferToSavings(amount));
    setAmount(0);
    console.log(transferFromCheckingAccount);
  };

  return (
    <div>
      <div className="transferContainer">
        <div className="transferBox">
          <h3>Transfer Money between accounts</h3>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(parseFloat(event.target.value))}
          />
          <br></br>
          <br></br>
          <button onClick={transferToCheckingAccount}>
            To checking account
          </button>
          <button onClick={transferFromCheckingAccount}>
            To savings account
          </button>
        </div>
      </div>
    </div>
  );
}
