# Spring CRUD + Angular + AG-Grid

Full-stack CRUD application with Spring Boot backend, PostgreSQL database, and Angular frontend with AG-Grid.

## Tech Stack

### Backend
- Spring Boot 3.3.2
- Spring Data JPA
- PostgreSQL
- Lombok
- Java 17

### Frontend
- Angular 17+
- AG-Grid
- TypeScript

## Project Structure

```
spring-crud-angular/
├── backend/              # Spring Boot application
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   └── pom.xml
├── frontend/            # Angular application
│   ├── src/
│   ├── package.json
│   └── angular.json
└── README.md
```

## Backend Setup

### Prerequisites
- Java 17+
- Maven 3.6+
- PostgreSQL 13+

### Database Setup

```sql
CREATE DATABASE crud_db;
```

### Configure Database

Edit `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/crud_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Run Backend

```bash
cd backend
mvn spring-boot:run
```

API will be available at: `http://localhost:8080`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/{id}` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/{id}` | Update user |
| DELETE | `/api/users/{id}` | Delete user |
| GET | `/api/users/search?name={name}` | Search users by name |
| GET | `/api/users/status/{status}` | Get users by status |

## Frontend Setup

### Prerequisites
- Node.js 18+
- Angular CLI 17+

### Install Dependencies

```bash
cd frontend
npm install
```

### Run Frontend

```bash
ng serve
```

Frontend will be available at: `http://localhost:4200`

## Features

- ✅ Full CRUD operations
- ✅ AG-Grid for data display
- ✅ Search and filter
- ✅ Validation
- ✅ Responsive design
- ✅ CORS configured

## License

MIT
