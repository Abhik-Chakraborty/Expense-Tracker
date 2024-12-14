import axios from 'axios';
import { Expense } from '../types/expense';

const API_URL = 'http://localhost:8081/api/expenses';

export const getExpenses = () => axios.get<Expense[]>(API_URL);
export const createExpense = (expense: Expense) => axios.post<Expense>(API_URL, expense);
export const deleteExpense = (id: number) => axios.delete(`${API_URL}/${id}`);