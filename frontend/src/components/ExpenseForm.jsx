import { useState, useEffect } from "react";

function ExpenseForm({
  addExpense,
  updateExpense,
  editingExpense,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [payment, setPayment] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
      setPayment(editingExpense.payment);
      setDescription(editingExpense.description);
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: editingExpense ? editingExpense.id : Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
      payment,
      description,
    };

    if (editingExpense) {
      updateExpense(newExpense);
    } else {
      addExpense(newExpense);
    }

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    setPayment("");
    setDescription("");
  };

  const handleReset = () => {
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    setPayment("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {editingExpense ? "Update Expense" : "Add New Expense"}
      </h2>

      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          placeholder="Enter Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <br />

      <div>
        <label htmlFor="amount">Amount</label>
        <br />
        <input
          type="number"
          id="amount"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <br />

      <div>
        <label htmlFor="category">Category</label>
        <br />
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Savings">Savings</option>
          <option value="Personal">Personal</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <br />

      <div>
        <label htmlFor="date">Date</label>
        <br />
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <br />

      <div>
        <label htmlFor="payment">Payment Method</label>
        <br />
        <select
          id="payment"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="Cash">Cash</option>
          <option value="UPI">UPI</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
        </select>
      </div>

      <br />

      <div>
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          id="description"
          placeholder="Enter Description (Optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <br />

      <button type="submit">
        {editingExpense ? "Update Expense" : "Add Expense"}
      </button>

      <button
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
}

export default ExpenseForm;