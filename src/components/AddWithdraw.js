import React from "react";
// import { selectCheckingAccount } from "../store/CheckingAccount/selectors";
import { useDispatch } from "react-redux";
import { addMoney, subtractMoney } from "../store/CheckingAccount/slice";
import "./AddWithdraw.css";

// Feature 1 - Adding and Withdrawing money *TRANSACTIONS*

// - Add money to the checking account
// - withdraw money from the checking account
// - Note! the state has to be managed by Redux

// When money is subtracted or added to this checking account this should be updated and
// displayed at the top of the app.

export default function AddWithdraw() {
  // const checkingAccountValue = useSelector(selectCheckingAccount);
  const dispatch = useDispatch();

  const handleAddMoney = () => {
    dispatch(addMoney());
  };

  const handleSubtractMoney = () => {
    dispatch(subtractMoney());
  };

  return (
    <div className="transactionsContainer">
      <div className="transactionsBox">
        <h2>Transactions</h2>
        <button onClick={handleAddMoney}>Add $10</button>
        <button onClick={handleSubtractMoney}>Subtract $10</button>
      </div>
    </div>
  );
}
