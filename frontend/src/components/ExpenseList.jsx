function ExpensesList(Expenses){
    if(expenses.length === 0){
        return <p>No Expenses added yet. </p>
    }
    return (
    <div>
        {expenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                expense={expense}
            />
        ))}
    </div>
);
}
export default ExpensesList;