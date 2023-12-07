import { useSelector } from "react-redux";
import { selectSavingsAccount } from "../store/SavingsAccount/selectors";
import React from "react";

export default function SavingsBalance() {
  const savingsAccountValue = useSelector(selectSavingsAccount);
  return <h2>Savings Account Balance: ${savingsAccountValue}</h2>;
}
