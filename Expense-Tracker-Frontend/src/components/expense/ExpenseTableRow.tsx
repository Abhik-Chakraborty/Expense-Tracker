import React from 'react';
import { Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { Expense } from '../../types/expense';
import { formatCurrency } from '../../utils/format';

interface ExpenseTableRowProps {
  expense: Expense;
  onDelete: (id: number) => Promise<boolean>;
}

const ExpenseTableRow: React.FC<ExpenseTableRowProps> = ({ expense, onDelete }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      {format(new Date(expense.date), 'MMM dd, yyyy')}
    </td>
    <td className="px-6 py-4">{expense.description}</td>
    <td className="px-6 py-4">{expense.category}</td>
    <td className="px-6 py-4">{formatCurrency(expense.amount)}</td>
    <td className="px-6 py-4">
      <button
        onClick={async () => expense.id && await onDelete(expense.id)}
        className="text-red-600 hover:text-red-900 transition-colors"
        aria-label="Delete expense"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </td>
  </tr>
);

export default ExpenseTableRow;