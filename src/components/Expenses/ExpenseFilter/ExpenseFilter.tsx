import './ExpenseFilter.css';
import {ChangeEvent} from 'react';

type Props = {
  onChangeFilter: (year: string) => void;
  defaultYear: string;
}
const ExpenseFilter = ({onChangeFilter, defaultYear}: Props) => {
  const filterChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by year</label>
        <select value={defaultYear} onChange={filterChangeHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
