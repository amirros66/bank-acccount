import "./App.css";
import AddWithdraw from "./components/AddWithdraw";
//import { useSelector, useDispatch } from "react-redux";
import Cards from "./components/Cards";
import CheckingBalance from "./components/CheckingBalance";
import SavingsBalance from "./components/SavingsBalance";
import Transfer from "./components/Transfer";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Your Bank Account</h1>
      <br></br>
      <CheckingBalance />
      <SavingsBalance />
      <AddWithdraw />
      <Transfer />
      <br></br>
      <br></br>
      <Cards />
    </div>
  );
}

export default App;
