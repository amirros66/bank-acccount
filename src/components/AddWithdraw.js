// import { selectCheckingAccount } from "../store/CheckingAccount/selectors";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
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
  const [amount, setAmount] = useState(0); //this is relating to add amount input field so they
  //can enter whatever amount they want rather than hardcoded values (€10).
  const handleAddMoney = () => {
    dispatch(addMoney(amount)); //dispatching the action + the payload of amount of money
    setAmount(0); //resets back to no input
  };

  const handleSubtractMoney = () => {
    dispatch(subtractMoney(amount));
    setAmount(0);
  };

  return (
    <div className="transactionsContainer">
      <div className="transactionsBox">
        <h3>Transactions</h3>
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(parseFloat(event.target.value))}
        />
        <br></br>
        <br></br>
        {/* The onChange event is triggered whenever the user interacts with the input field. 
        In this case, it's a function that takes an event (e) as a parameter. 
        The e.target.value represents the current value of the input field. */}
        {/* parseFloat(e.target.value): This part converts the string value of the input field to
        a floating-point number. The parseFloat function parses a string argument and returns 
        a floating-point number.
        setAmount(...): Finally, the result of parseFloat(e.target.value) is passed to the 
        setAmount function. This updates the amount state variable with the parsed numeric 
        value. As a result, the component re-renders with the new value, and the input field 
        displays the converted numeric value. */}
        <button onClick={handleAddMoney}>Add</button>
        <button onClick={handleSubtractMoney}>Withdraw</button>
      </div>
    </div>
  );
}
