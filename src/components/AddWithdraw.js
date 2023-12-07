import { useSelector } from "react-redux";
//the  useSelector hook is used to extract the error field from the Redux store.
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { addMoney, subtractMoney } from "../store/CheckingAccount/slice";
import "./AddWithdraw.css";

// Feature 1 - Adding and Withdrawing money *TRANSACTIONS*

//if a transaction will leave the account lower than 0, this should not be allowed

export default function AddWithdraw() {
  // const checkingAccountValue = useSelector(selectCheckingAccount);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0); //this is relating to add amount input field so they
  //can enter whatever amount they want rather than hardcoded values (€10).

  const error = useSelector((state) => state.checkingAccount.error);
  //(state) => state.checkingAccount.error: This is an arrow function that takes the entire
  // Redux state as its parameter (state). It then accesses the checkingAccount slice of the
  // state and extracts the error field from it.

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
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}
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
