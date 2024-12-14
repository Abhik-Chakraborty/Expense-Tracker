package com.example.expensetracker.service;

import com.example.expensetracker.model.Expense;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class ExpenseService {
    private static final String DATA_FILE = "expenses.json";
    private final ObjectMapper objectMapper;
    private List<Expense> expenses;
    private AtomicLong currentId;

    public ExpenseService() {
        this.objectMapper = new ObjectMapper();
        this.objectMapper.registerModule(new JavaTimeModule());
        this.expenses = new ArrayList<>();
        this.currentId = new AtomicLong(1);
    }

    @PostConstruct
    public void init() {
        loadExpenses();
    }

    public List<Expense> getAllExpenses() {
        return new ArrayList<>(expenses);
    }

    public Expense addExpense(Expense expense) {
        expense.setId(currentId.getAndIncrement());
        expenses.add(expense);
        saveExpenses();
        return expense;
    }

    public void deleteExpense(Long id) {
        expenses.removeIf(expense -> expense.getId().equals(id));
        saveExpenses();
    }

    private void loadExpenses() {
        File file = new File(DATA_FILE);
        if (file.exists()) {
            try {
                expenses = objectMapper.readValue(file, new TypeReference<List<Expense>>() {});
                currentId.set(expenses.stream()
                        .mapToLong(Expense::getId)
                        .max()
                        .orElse(0) + 1);
            } catch (IOException e) {
                throw new RuntimeException("Error loading expenses", e);
            }
        }
    }

    private void saveExpenses() {
        try {
            objectMapper.writeValue(new File(DATA_FILE), expenses);
        } catch (IOException e) {
            throw new RuntimeException("Error saving expenses", e);
        }
    }
}