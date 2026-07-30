function ExpenseItem({
  expense,
  deleteExpense,
  editExpense,
}) {
  return (
    <div className="expense-item">
      <h3>{expense.title}</h3>

      <p>
        <strong>Amount:</strong> ₹{expense.amount}
      </p>

      <p>
        <strong>Category:</strong> {expense.category}
      </p>

      <p>
        <strong>Date:</strong> {expense.date}
      </p>

      <p>
        <strong>Payment:</strong> {expense.payment}
      </p>

      {expense.description && (
        <p>
          <strong>Description:</strong> {expense.description}
        </p>
      )}

      <div className="expense-actions">
        <button
          onClick={() => editExpense(expense)}
        >
          Edit
        </button>

        <button
          onClick={() => deleteExpense(expense.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;