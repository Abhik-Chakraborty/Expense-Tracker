import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center p-4">
    <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
  </div>
);

export default LoadingSpinner;