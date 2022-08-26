import React ,{useState}from "react"
import ExpenceForm from "./ExpenseForm"
import '../NewExpence/NewExpense.css'

const NewExpence=(props)=>{
    const [isEditing, setisEditing] = useState(false)

    const onSaveExpenseData=(EnteredExpenseData)=>{
        const expenseDate={
            ...EnteredExpenseData,
            id :Math.random().toString()
        }
       props.addExpense(expenseDate)
       setisEditing(false)
    }
    const isEditinghandeler=()=>{
        setisEditing(true)
    }
    const stopEditinghandeler=()=>{
        setisEditing(false)
    }

return (
    <div className="new-expense">
        {!isEditing &&  <button onClick={isEditinghandeler}>Add new expense</button>}
            { isEditing && <ExpenceForm onSaveExpenseData={onSaveExpenseData} stop={stopEditinghandeler}/>}
    </div>
)

}
 export  default NewExpence