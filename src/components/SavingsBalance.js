import { useSelector } from "react-redux";
import { selectSavingsAccount } from "../store/SavingsAccount/selectors";
import React from "react";

export default function SavingsBalance() {
  const savingsAccountValue = useSelector(selectSavingsAccount);
  return <h1>Checking Account Balance: ${savingsAccountValue}</h1>;
}
