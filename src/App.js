import "./App.css";
import AddWithdraw from "./components/AddWithdraw";
//import { useSelector, useDispatch } from "react-redux";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <h1>Bank Account</h1>
      <br></br>
      <AddWithdraw />
      <h2>Savings Account Balance:</h2>
      <br></br>
      <br></br>
      <Cards />
    </div>
  );
}

export default App;
