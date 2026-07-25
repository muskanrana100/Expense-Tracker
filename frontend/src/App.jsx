import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import {useState} from "react";
function App() {
  const[expenses, setExpenses] = useState([]);
  return (
    <div>
      <Header />
      <ExpenseList expenses={expenses} />
      <ExpenseForm />
      <Footer />
    </div>
  );
}

export default App;