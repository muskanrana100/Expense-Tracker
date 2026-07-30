import ExpenseItem from "./ExpenseItem";

function ExpenseList({
  expenses,
  deleteExpense,
  editExpense,
}) {
  if (expenses.length === 0) {
    return (
      <p className="no-expenses">
        No expenses added yet.
      </p>
    );
  }

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
        />
      ))}
    </div>
  );
}

export default ExpenseList;