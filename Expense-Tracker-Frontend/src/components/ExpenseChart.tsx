import React from 'react';
import { Expense } from '../types/expense';
import { calculateCategoryTotals, calculateMonthlyTotals } from '../utils/calculations';
import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';

interface ExpenseChartProps {
  expenses: Expense[];
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-gray-500">No expenses to display</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-gray-500">No expenses to display</p>
        </div>
      </div>
    );
  }

  const categoryTotals = calculateCategoryTotals(expenses);
  const monthlyTotals = calculateMonthlyTotals(expenses);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <PieChart 
        data={categoryTotals} 
        title="Expenses by Category" 
      />
      <BarChart 
        data={monthlyTotals} 
        title="Monthly Expenses" 
        label="Amount (Rs.)"
      />
    </div>
  );
};

export default ExpenseChart;