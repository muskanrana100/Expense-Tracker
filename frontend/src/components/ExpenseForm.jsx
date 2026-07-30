import { useState, useEffect } from "react";
import "../styles/ExpenseForm.css";

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

  const clearForm = () => {
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    setPayment("");
    setDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: editingExpense ? editingExpense.id : Date.now(),
      title: title.trim(),
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

    clearForm();
  };

  const handleReset = () => {
    clearForm();
  };

  return (
    <form
      className="expense-form"
      onSubmit={handleSubmit}
    >
      <div className="form-container">
        <h2>
          {editingExpense
            ? "Update Expense"
            : "Add New Expense"}
        </h2>

        <div>
          <label htmlFor="title">Title</label>

          <input
            type="text"
            id="title"
            placeholder="Enter Expense Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            required
          />
        </div>

        <div>
          <label htmlFor="amount">
            Amount
          </label>

          <input
            type="number"
            id="amount"
            min="1"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
            required
          />
        </div>

        <div>
          <label htmlFor="category">
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            required
          >
            <option value="">
              Select Category
            </option>
            <option value="Food">
              Food
            </option>
            <option value="Travel">
              Travel
            </option>
            <option value="Shopping">
              Shopping
            </option>
            <option value="Bills">
              Bills
            </option>
            <option value="Entertainment">
              Entertainment
            </option>
            <option value="Savings">
              Savings
            </option>
            <option value="Personal">
              Personal
            </option>
            <option value="Others">
              Others
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="date">
            Date
          </label>

          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
            required
          />
        </div>

        <div>
          <label htmlFor="payment">
            Payment Method
          </label>

          <select
            id="payment"
            value={payment}
            onChange={(e) =>
              setPayment(e.target.value)
            }
            required
          >
            <option value="">
              Select Payment Method
            </option>
            <option value="Cash">
              Cash
            </option>
            <option value="UPI">
              UPI
            </option>
            <option value="Credit Card">
              Credit Card
            </option>
            <option value="Debit Card">
              Debit Card
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="description">
            Description
          </label>

          <textarea
            id="description"
            placeholder="Enter Description (Optional)"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />
        </div>

        <div className="button-group">
          <button type="submit">
            {editingExpense
              ? "Update Expense"
              : "Add Expense"}
          </button>

          <button
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;