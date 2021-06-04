import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeEvent = (value) => {
    setFilterYear(value);
  };
  const filteredExpense = props.items.filter((e) => {
    return e.date.getFullYear() === Number(filterYear);
  });
  // <ExpenseItem title={e.title} amount={e.amount} date={e.date}/>
  /*<ExpenseItem
  key={e.id}
  title={e.title}
  amount={e.amount}
  date={e.date}
/>*/

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onFilterChange={filterChangeEvent}
        />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
// const b = [3, 32, 43, 43, 5];
// b.filter((e) => e > 5).map((e) => console.log(e));
