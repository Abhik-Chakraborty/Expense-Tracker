import { Expense } from '../types/expense';

export const getInitialExpenseState = (): Omit<Expense, 'id'> => ({
  description: '',
  amount: '',
  category: '',
  date: new Date().toISOString().split('T')[0]
});