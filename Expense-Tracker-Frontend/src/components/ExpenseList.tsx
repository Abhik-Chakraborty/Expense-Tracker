import React from 'react';
import ExpenseTable from './expense/ExpenseTable';
import EmptyState from './expense/EmptyState';
import LoadingSpinner from './LoadingSpinner';
import { Expense } from '../types/expense';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: number) => Promise<boolean>;
  isLoading: boolean;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDelete, isLoading }) => {
  if (isLoading && expenses.length === 0) {
    return <LoadingSpinner />;
  }

  if (expenses.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Expense List</h2>
      <ExpenseTable expenses={expenses} onDelete={onDelete} />
    </div>
  );
};

export default ExpenseList;