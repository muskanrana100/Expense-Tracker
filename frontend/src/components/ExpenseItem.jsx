import "../styles/ExpenseItem.css";

function ExpenseItem({
  expense,
  deleteExpense,
  editExpense,
}) {
  return (
    <div className="expense-item">
      <h3>{expense.title}</h3>

      <p>
        <strong>💰 Amount:</strong> ₹
        {expense.amount.toLocaleString("en-IN")}
      </p>

      <p>
        <strong>📂 Category:</strong>{" "}
        {expense.category}
      </p>

      <p>
        <strong>📅 Date:</strong>{" "}
        {new Date(expense.date).toLocaleDateString(
          "en-IN",
          {
            day: "numeric",
            month: "short",
            year: "numeric",
          }
        )}
      </p>

      <p>
        <strong>💳 Payment:</strong>{" "}
        {expense.payment}
      </p>

      {expense.description && (
        <p>
          <strong>📝 Description:</strong>{" "}
          {expense.description}
        </p>
      )}

      <div className="expense-actions">
        <button
          className="edit-btn"
          type="button"
          onClick={() => editExpense(expense)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          type="button"
          onClick={() =>
            deleteExpense(expense.id)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;