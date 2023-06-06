export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

export type ExpenseFormValue = {
  title: string;
  amount: string;
  date: string,
}
