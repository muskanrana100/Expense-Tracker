import "../styles/Summary.css";

function Summary({ expenses }) {
  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const totalTransactions = expenses.length;

  const totalCategories = new Set(
    expenses.map((expense) => expense.category)
  ).size;

  const latestExpense =
    expenses.length > 0
      ? expenses[expenses.length - 1].title
      : "None";

  return (
    <div className="summary">
      <h2>Expense Summary</h2>

      <div className="summary-grid">

        <div className="summary-card">
          <h3>💰 Total Expenses</h3>
          <p>₹{totalAmount.toLocaleString("en-IN")}</p>
        </div>

        <div className="summary-card">
          <h3>📄 Transactions</h3>
          <p>{totalTransactions}</p>
        </div>

        <div className="summary-card">
          <h3>📂 Categories</h3>
          <p>{totalCategories}</p>
        </div>

        <div className="summary-card">
          <h3>🕒 Latest Expense</h3>
          <p>{latestExpense}</p>
        </div>

      </div>
    </div>
  );
}

export default Summary;