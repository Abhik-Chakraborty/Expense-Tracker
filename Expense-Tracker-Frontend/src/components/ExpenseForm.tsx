import React from 'react';
import { PlusCircle } from 'lucide-react';
import { Expense } from '../types/expense';
import { EXPENSE_CATEGORIES } from '../constants/categories';
import { useExpenseForm } from '../hooks/useExpenseForm';
import FormField from './form/FormField';
import FormSelect from './form/FormSelect';

interface ExpenseFormProps {
  onSubmit: (expense: Expense) => Promise<boolean>;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const { expense, isSubmitting, handleSubmit, handleChange } = useExpenseForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Expense</h2>
      <div className="grid gap-4">
        <FormField
          label="Description"
          name="description"
          type="text"
          value={expense.description}
          onChange={handleChange}
          disabled={isSubmitting}
          required
        />

        <FormField
          label="Amount"
          name="amount"
          type="number"
          value={expense.amount}
          onChange={handleChange}
          disabled={isSubmitting}
          required
          min="0"
          step="0.01"
        />

        <FormSelect
          label="Category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          options={EXPENSE_CATEGORIES}
          disabled={isSubmitting}
          required
        />

        <FormField
          label="Date"
          name="date"
          type="date"
          value={expense.date}
          onChange={handleChange}
          disabled={isSubmitting}
          required
        />

        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          disabled={isSubmitting}
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          {isSubmitting ? 'Adding...' : 'Add Expense'}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;