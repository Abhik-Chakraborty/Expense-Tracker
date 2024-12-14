import { Expense } from '../types/expense';

export const calculateTotalExpenses = (expenses: Expense[]): number => {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
};

export const calculateCategoryTotals = (expenses: Expense[]): { [key: string]: number } => {
  return expenses.reduce((acc: { [key: string]: number }, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});
};

export const calculateMonthlyTotals = (expenses: Expense[]): { [key: string]: number } => {
  return expenses.reduce((acc: { [key: string]: number }, expense) => {
    const month = new Date(expense.date).toLocaleString('default', { month: 'short' });
    acc[month] = (acc[month] || 0) + expense.amount;
    return acc;
  }, {});
};