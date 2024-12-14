import type { ChartData as ChartJSData, ChartOptions as ChartJSOptions } from 'chart.js';

export type ChartData = ChartJSData<'bar' | 'pie', number[], string>;
export type ChartOptions = ChartJSOptions<'bar' | 'pie'>;