import React from 'react';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: readonly string[];
}

const FormSelect: React.FC<FormSelectProps> = ({ label, name, options, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
      {label}
    </label>
    <select
      id={name}
      name={name}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      {...props}
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default FormSelect;