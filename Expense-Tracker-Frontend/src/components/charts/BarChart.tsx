import React from 'react';
import { Bar } from 'react-chartjs-2';
import { chartOptions } from './ChartConfig';
import type { ChartData, ChartOptions } from './types';

interface BarChartProps {
  data: {
    [key: string]: number;
  };
  title: string;
  label: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, title, label }) => {
  const chartData: ChartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label,
        data: Object.values(data),
        backgroundColor: '#36A2EB',
        borderColor: '#2196F3',
        borderWidth: 1
      }
    ]
  };

  const options: ChartOptions = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        ...chartOptions.plugins.title,
        text: title
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;