import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [editingExpense, setEditingExpense] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");


  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const editExpense = (expense) => {
    setEditingExpense(expense);
  };

  const updateExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updatedExpense.id
          ? updatedExpense
          : expense
      )
    );

    setEditingExpense(null);
  };

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  // Search + Category Filter
  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      expense.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sorting
  const sortedExpenses = [...filteredExpenses];

  switch (sortOption) {
    case "highest":
      sortedExpenses.sort((a, b) => b.amount - a.amount);
      break;

    case "lowest":
      sortedExpenses.sort((a, b) => a.amount - b.amount);
      break;

    case "newest":
      sortedExpenses.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      break;

    case "oldest":
      sortedExpenses.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      break;

    default:
      break;
  }

  return (
    <div>
      <Header />

      <Summary expenses={expenses} />

      <input
        type="text"
        placeholder="Search Expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Savings">Savings</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="highest">Highest Amount</option>
        <option value="lowest">Lowest Amount</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>

      <ExpenseList
        expenses={sortedExpenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
      />

      <ExpenseForm
        addExpense={addExpense}
        updateExpense={updateExpense}
        editingExpense={editingExpense}
      />

      <Footer />
    </div>
  );
}

export default App;