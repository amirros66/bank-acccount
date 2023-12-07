import "./App.css";
import AddWithdraw from "./components/AddWithdraw";
//import { useSelector, useDispatch } from "react-redux";
import Cards from "./components/Cards";
import CheckingBalance from "./components/CheckingBalance";
import SavingsBalance from "./components/SavingsBalance";

function App() {
  return (
    <div className="App">
      <h1>Bank Account</h1>
      <br></br>
      <CheckingBalance />
      <SavingsBalance />
      <AddWithdraw />
      <br></br>
      <br></br>
      <Cards />
    </div>
  );
}

export default App;
