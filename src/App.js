import "./App.css";
//import { useSelector, useDispatch } from "react-redux";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <h1>Bank Account</h1>
      <br></br>
      <h2>Checking Account Balance:</h2>
      {/* how do I get initial state (amount) for checking account from CheckingAccount/Slice - initialstate? */}
      <h2>Savings Account Balance:</h2>
      {/* how do I get initial state for savings account from SavingsAccount/Slice - initialstate? */}
      <br></br>
      <br></br>
      <Cards />
    </div>
  );
}

export default App;
