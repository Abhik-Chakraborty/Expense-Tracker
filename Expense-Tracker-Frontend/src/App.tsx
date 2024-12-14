import React from 'react';
import { Wallet } from 'lucide-react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';
import ExpenseHeader from './components/expense/ExpenseHeader';
import { useExpenses } from './hooks/useExpenses';
import { calculateTotalExpenses } from './utils/calculations';

const App: React.FC = () => {
  const { 
    expenses, 
    isLoading, 
    error, 
    fetchExpenses, 
    addExpense, 
    removeExpense 
  } = useExpenses();

  React.useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  if (isLoading && expenses.length === 0) {
    return <LoadingSpinner />;
  }

  const totalExpenses = calculateTotalExpenses(expenses);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ExpenseHeader 
          icon={<Wallet className="w-12 h-12 text-blue-600" />}
          title="Expense Tracker"
          totalExpenses={totalExpenses}
        />

        <ErrorMessage message={error || ''} />

        <div className="grid gap-8">
          <ExpenseForm onSubmit={addExpense} />
          <ExpenseChart expenses={expenses} />
          <ExpenseList 
            expenses={expenses} 
            onDelete={removeExpense}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default App;