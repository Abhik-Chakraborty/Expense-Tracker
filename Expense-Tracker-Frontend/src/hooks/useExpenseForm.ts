import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { Expense } from '../types/expense';
import { getInitialExpenseState } from '../utils/form';

export const useExpenseForm = (onSubmit: (expense: Expense) => Promise<boolean>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expense, setExpense] = useState(getInitialExpenseState());

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setExpense(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const success = await onSubmit({
      ...expense,
      amount: parseFloat(expense.amount.toString())
    });

    if (success) {
      setExpense(getInitialExpenseState());
    }
    
    setIsSubmitting(false);
  }, [expense, onSubmit]);

  return {
    expense,
    isSubmitting,
    handleSubmit,
    handleChange
  };
};

export default useExpenseForm;