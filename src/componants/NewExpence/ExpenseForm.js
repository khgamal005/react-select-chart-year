import React ,{useState}from "react"
import  '../NewExpence/ExpenseForm.css'

const ExpenceForm=(props)=>{
    const [Enterdtitle, setEnterdtitle] = useState('')
    const [Enterdamount, setEnterdamount] = useState('')
    const [Enterddate, setEnterddate] = useState('')

    // const [userInput, setuserInput] = useState({
    //     Enterdtitle:'',
    //     Enterdamount:'',
    //     Enterddate:'',
    // })
const changeHandelerTitle=(e)=>{
    setEnterdtitle(e.target.value)
    // setuserInput({
    //     ...userInput,
    //     Enterdtitle:e.target.value
    // }
    // )
}
const  changeHandeleramount=(e)=>{
    setEnterdamount(e.target.value)
    // setuserInput({
    //     ...userInput,
    //     Enterdamount:e.target.value
    // })
}
const  changeHandelerdate=e=>{
    setEnterddate(e.target.value)
    // setuserInput({
    //     ...userInput,
    //     Enterddate:e.target.value
    // })
    // setuserInput((prevstate)=>{
    //     return {...prevstate, Enterdtitle:e.target.value}
    // })
}

const handelSubmit=(e)=>{
    e.preventDefault()
        const expenseDate ={
        title :Enterdtitle,
        amount :Enterdamount,
        date : new Date (Enterddate)
    }
    props.onSaveExpenseData(expenseDate)
}

return (<>
 <form onSubmit={handelSubmit} >
        <div className="new-expense__control label">
        <div className="new-expense__control label">
            <label>title</label>
            <input  type='text'  onChange={changeHandelerTitle}/>
            </div> 
        <div className="new-expense__control label">
            <label>Amount</label>
            <input  type='number' min='0.01' step='0.01'  onChange={changeHandeleramount}/>
            </div> 
        <div className="new-expense__control label">
            <label>Date</label>
            <input  type='date' min='2021-1-1' max='2019-1-31'  onChange={changeHandelerdate}/>
            </div> 
            <div className="new-expense__actions">
            <button onClick={props.stopEditinghandeler}>cancel</button>
            <button>Add Expense</button>
            </div>
            </div> 
    
        </form>
    
</>
    
   
)

}
 export  default ExpenceForm