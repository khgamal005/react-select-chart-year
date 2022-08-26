import ExpenseDate from '../ExpensesDate';
import React ,{useState} from 'react'
import './ExpensesItems.css'
function ExpenseItem(props) {
// const [title , settitle]=useState(props.title)
//  const handelClilck =()=>[
//   settitle('update'),

// console.log(title)

// ]

  return (
    <div>
     <div className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button>click</button> */}
      </div>
    </div>  )
    </div>
  );
}

export default ExpenseItem;
