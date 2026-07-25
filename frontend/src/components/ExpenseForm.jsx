import {useState} from "react";
function ExpenseForm() {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCatogery] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription]= useState("");
    return (
        <form action="/action">
        <div>
            <h2>Add New Expense</h2>

            <label htmlFor="amount">Amount</label>
            <br />
            <input type="number" id="amount" placeholder="Enter The Amount"
             value={title}
             onChange={(e) => setTitle(e.target.value)} />
            <p>Amount Entered: {amount}</p>
        

            <br /><br />

            <label>Category</label>
            <br />
            <select name="category"  id="category"
            value ={category}
            onChange={(e) => setCatogery(e.target.value)}> 

                <option value="1">Travel</option>
                <option value="2">Food</option>
                <option value="3">Shopping</option>
                <option value="4">Bills</option>
                <option value="5">Entertainment</option>
                <option value="6">Savings</option>
                <option value="7">Persnol Expenses</option>
                <option value="8">Others</option>
            </select>

            <br /><br />

            <label id="Date">Date</label>
            <br />
            <input type="date" id="Date" placeholder="Date"
            value ={date}
            onChange={(e)=> setDate(e.target.value)}/>

            <br /><br />

            <label htmlFor="Description">Enter Description</label>
            <br />
            <textarea id="Description" placeholder="Enter Description (optional)" 
            value={description} 
            onChange ={(e)=>setdescription(e.target.value)}></textarea>
            <p> Entered Description = {description}</p>

            <br /><br />

            <label htmlFor="Payment">Payment Method</label>
            <br />
            <select name="Payment" id="Payment">
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
            </select>
            
            <br /><br />

            <button>Add Expense</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button>Reset</button>

        </div>
    </form>
    );
}
export default ExpenseForm;