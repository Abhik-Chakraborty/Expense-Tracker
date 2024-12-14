import React from 'react';

const HEADERS = [
  'Date',
  'Description',
  'Category',
  'Amount',
  'Actions'
] as const;

const ExpenseTableHeader: React.FC = () => (
  <thead className="bg-gray-50">
    <tr>
      {HEADERS.map((header) => (
        <th
          key={header}
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

export default ExpenseTableHeader;