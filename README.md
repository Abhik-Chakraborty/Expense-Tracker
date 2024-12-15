# Expense Tracker Application

A full-stack expense tracking application built with React (Frontend) and Spring Boot (Backend) that helps users manage and visualize their expenses.


## 🌟 Features

- ✨ Add, view, and delete expenses
- 📊 Visual expense analysis with charts
- 📱 Responsive design for all devices
- 💾 File-based persistent storage
- 🔄 Real-time updates
- 📈 Monthly expense trends
- 🎨 Clean and intuitive UI

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Chart.js & React-Chartjs-2
- Axios
- Lucide React (Icons)
- Vite (Build tool)

### Backend
- Spring Boot 3.2.3
- Java 17
- Maven
- Jackson (JSON processing)
- File System Storage

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Java JDK 17
- Maven

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
```

2. **Backend Setup**
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
The backend server will start on http://localhost:8080

3. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```
The frontend development server will start on http://localhost:5173

## 📁 Project Structure

### Frontend Structure
```
src/
├── components/           # React components
│   ├── charts/          # Chart components
│   ├── expense/         # Expense-related components
│   └── form/           # Reusable form components
├── hooks/               # Custom React hooks
├── services/            # API services
├── types/               # TypeScript interfaces
├── utils/               # Utility functions
└── constants/           # Application constants
```

### Backend Structure
```
src/main/java/com/example/expensetracker/
├── controller/          # REST controllers
├── model/              # Data models
├── service/            # Business logic
└── ExpenseTrackerApplication.java
```

## 🔧 Configuration

### Backend Configuration
```properties
# application.properties
server.port=8081
spring.jackson.date-format=yyyy-MM-dd
spring.jackson.time-zone=UTC
```

### Frontend Configuration
```typescript
// api.ts
const API_URL = 'http://localhost:8081/api/expenses';
```

## 💡 Best Practices Implemented

### Code Organization
- Small, focused components
- Clear separation of concerns
- Reusable utility functions
- Type safety with TypeScript
- Proper error handling
- Component modularity

### Backend Design
- Service Layer Pattern
- DTO Pattern
- Dependency Injection
- Thread-safe operations
- Proper exception handling
- CORS configuration

## 🔒 Security

- Input validation
- CORS protection
- Error handling
- Safe file system operations
- Type checking

## 📊 API Endpoints

```
GET    /api/expenses      - Retrieve all expenses
POST   /api/expenses      - Create a new expense
DELETE /api/expenses/{id} - Delete an expense
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

