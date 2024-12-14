import { useState, useCallback } from 'react';
import { Expense } from '../types/expense';
import { getExpenses, createExpense, deleteExpense } from '../services/api';

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchExpenses = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getExpenses();
      // Sort expenses by date in descending order
      const sortedExpenses = response.data.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setExpenses(sortedExpenses);
    } catch (err) {
      setError('Failed to fetch expenses. Please try again later.');
      console.error('Error fetching expenses:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addExpense = useCallback(async (newExpense: Expense): Promise<boolean> => {
    setError(null);
    try {
      const response = await createExpense(newExpense);
      setExpenses(prev => {
        const updated = [...prev, response.data];
        // Sort by date in descending order
        return updated.sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      });
      return true;
    } catch (err) {
      setError('Failed to add expense. Please try again.');
      console.error('Error adding expense:', err);
      return false;
    }
  }, []);

  const removeExpense = useCallback(async (id: number): Promise<boolean> => {
    setError(null);
    try {
      await deleteExpense(id);
      setExpenses(prev => prev.filter(expense => expense.id !== id));
      return true;
    } catch (err) {
      setError('Failed to delete expense. Please try again.');
      console.error('Error deleting expense:', err);
      return false;
    }
  }, []);

  return {
    expenses,
    isLoading,
    error,
    fetchExpenses,
    addExpense,
    removeExpense
  };
};