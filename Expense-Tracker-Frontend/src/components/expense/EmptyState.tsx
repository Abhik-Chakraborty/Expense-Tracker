import React from 'react';

const EmptyState: React.FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <p className="text-gray-500">
      No expenses found. Add some expenses to get started!
    </p>
  </div>
);

export default EmptyState;