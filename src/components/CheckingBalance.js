// import React from "react";
// import { selectCheckingAccount } from "../store/CheckingAccount/Selectors";
import { useSelector } from "react-redux";
import { selectCheckingAccount } from "../store/CheckingAccount/selectors";
import React from "react";

export default function CheckingBalance() {
  const checkingAccountValue = useSelector(selectCheckingAccount);
  return <h2>Checking Account Balance: €{checkingAccountValue}</h2>;
}
