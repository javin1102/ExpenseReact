import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeEvent = (value) => {
    setFilterYear(value);
  };
  // <ExpenseItem title={e.title} amount={e.amount} date={e.date}/>
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onFilterChange={filterChangeEvent}
        />
        {props.items.foreach((element) => {
          console.log(element);
        })}
      </Card>
    </div>
  );
}

export default Expenses;
