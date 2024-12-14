import React from 'react';
import { Expense } from '../../types/expense';
import ExpenseTableHeader from './ExpenseTableHeader';
import ExpenseTableRow from './ExpenseTableRow';

interface ExpenseTableProps {
  expenses: Expense[];
  onDelete: (id: number) => Promise<boolean>;
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, onDelete }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <ExpenseTableHeader />
      <tbody className="bg-white divide-y divide-gray-200">
        {expenses.map((expense) => (
          <ExpenseTableRow 
            key={expense.id} 
            expense={expense} 
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default ExpenseTable;