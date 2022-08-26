import React ,{useState}from 'react'
import ExpenseItem from './ExpensesItems'

import './Expenses.css'
import ExpensesFilter from './ExpenseFilter'
import ExpenseChart from './ExpenseChart'

export default function Expenses(props) {
  const [filterdyear, setfilterdyear] = useState('2019')
  const filteredExpenses =props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterdyear;
});
  const onChangeHandeler=(selectedyear)=>{
    setfilterdyear(selectedyear)
  }
  let expensescontent = <p>no expenses found .</p>
  if (filteredExpenses.length>0){
    expensescontent =  filteredExpenses.map((expense)=>{ return <ExpenseItem 
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />})
  }

  return (
<div className='expenses'>
<ExpensesFilter selected={filterdyear} onChangeHandeler={onChangeHandeler}/>
{/* {filteredExpenses.length===0&&"no expense found"}

{filteredExpenses.length>0&& filteredExpenses.map((expense)=>{ return <ExpenseItem 
key={expense.id}
title={expense.title}
amount={expense.amount}
date={expense.date}
/>})} */}
<ExpenseChart  expenses={filteredExpenses }/>

{expensescontent }
{/* <ExpenseItem title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}/>
      <ExpenseItem title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}/>
      <ExpenseItem  title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date} />
      <ExpenseItem  title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}/> */}
</div>
  )
}
