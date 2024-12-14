import React from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      name={name}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      {...props}
    />
  </div>
);

export default FormField;