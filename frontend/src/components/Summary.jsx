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

      <p>
        <strong>Total Expenses:</strong> ₹{totalAmount}
      </p>

      <p>
        <strong>Total Transactions:</strong>{" "}
        {totalTransactions}
      </p>

      <p>
        <strong>Categories Used:</strong>{" "}
        {totalCategories}
      </p>

      <p>
        <strong>Latest Expense:</strong>{" "}
        {latestExpense}
      </p>
    </div>
  );
}

export default Summary;