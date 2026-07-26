import { useState } from "react";
function ExpenseForm({ addExpense }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCatogery] = useState("");
    const [date, setDate] = useState("");
    const [payment, setPayment] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            id: Date.now(),
            title,
            amount: Number(amount),
            category,
            date,
            description,
        };

        addExpense(newExpense);
        setTitle("");
        setAmount("");
        setCategory("");
        setDate("");
        setDescription("");
    };
    return (
        <form action="/action" onSubmit={handleSubmit}>
            <div>
                <h2>Add New Expense</h2>
                <label htmlFor="amount">Amount</label>
                <br />
                <input type="number" id="amount" placeholder="Enter The Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />
                <br /><br />
                <label>Category</label>
                <br />
                <select name="category" id="category"
                    value={category}
                    onChange={(e) => setCatogery(e.target.value)}>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Savings">Savings</option>
                    <option value="Personal">Persnol Expenses</option>
                    <option value="Others">Others</option>
                </select>
                <br /><br />
                <label id="Date">Date</label>
                <br />
                <input type="date" id="Date" placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />
                <br /><br />
                <label htmlFor="Description">Enter Description</label>
                <br />
                <textarea id="Description" placeholder="Enter Description (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}></textarea>
                <br /><br />
                <label htmlFor="Payment">Payment Method</label>
                <br />
                <select name="Payment" id="Payment"
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}>
                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                </select>
                <br /><br />

                <button type="submit">
                    Add Expense
                </button>

                <button type="submit">
                    Reset
                </button>

            </div>
        </form>
    );
}
export default ExpenseForm;