import React, { ReactNode } from 'react';
import { formatCurrency } from '../../utils/format';

interface ExpenseHeaderProps {
  icon: ReactNode;
  title: string;
  totalExpenses: number;
}

const ExpenseHeader: React.FC<ExpenseHeaderProps> = ({ icon, title, totalExpenses }) => (
  <div className="text-center mb-8">
    <div className="flex items-center justify-center mb-4">
      {icon}
    </div>
    <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
    <p className="mt-2 text-xl text-gray-600">
      Total Expenses: {formatCurrency(totalExpenses)}
    </p>
  </div>
);

export default ExpenseHeader;
