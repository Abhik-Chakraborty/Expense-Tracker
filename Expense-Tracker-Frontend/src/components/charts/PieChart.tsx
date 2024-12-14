import React from 'react';
import { Pie } from 'react-chartjs-2';
import { chartOptions } from './ChartConfig';
import { CHART_COLORS } from '../../constants/categories';
import type { ChartData, ChartOptions } from './types';

interface PieChartProps {
  data: {
    [key: string]: number;
  };
  title: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
  const chartData: ChartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: CHART_COLORS,
        borderColor: CHART_COLORS.map(color => color.replace('0.8', '1')),
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
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;