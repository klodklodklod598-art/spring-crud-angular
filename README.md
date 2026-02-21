# Spring CRUD + Angular + AG-Grid

Full-stack CRUD application with Spring Boot backend, PostgreSQL database, and Angular frontend with AG-Grid.

## 🚀 Repository

https://github.com/klodklodklod598-art/spring-crud-angular

## 🛠 Tech Stack

### Backend
- Spring Boot 3.3.2
- Spring Data JPA
- PostgreSQL
- Lombok
- Java 17

### Frontend
- Angular 17+
- AG-Grid 31.3.2
- TypeScript

## 📁 Project Structure

```
spring-crud-angular/
├── src/main/java/            # Spring Boot Java source
│   └── com/example/springcrudangular/
│       ├── controller/       # REST controllers
│       ├── service/          # Business logic
│       ├── repository/       # JPA repositories
│       ├── entity/           # JPA entities
│       └── config/           # Configuration classes
├── src/main/resources/       # Configuration files
│   └── application.properties
└── frontend/                # Angular application
    └── src/app/
        ├── components/      # Angular components
        ├── services/        # HTTP services
        └── models/          # TypeScript interfaces
```

## ⚙️ Backend Setup

### Prerequisites
- Java 17+
- Maven 3.6+
- PostgreSQL 13+

### 1. Database Setup

```sql
CREATE DATABASE crud_db;
```

### 2. Configure Database Connection

Edit `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/crud_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 3. Run Backend

```bash
# Install dependencies and run
mvn clean install
mvn spring-boot:run
```

API will be available at: **http://localhost:8080**

## 🎨 Frontend Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Run Frontend

```bash
ng serve
```

Frontend will be available at: **http://localhost:4200**

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/{id}` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/{id}` | Update user |
| DELETE | `/api/users/{id}` | Delete user |
| GET | `/api/users/search?name={name}` | Search users by name |
| GET | `/api/users/status/{status}` | Get users by status |

## ✨ Features

- ✅ **Full CRUD operations** (Create, Read, Update, Delete)
- ✅ **AG-Grid** for advanced data display with sorting and filtering
- ✅ **Search functionality** by user name
- ✅ **Filter by status** (Active, Inactive, Pending)
- ✅ **Inline editing** in AG-Grid
- ✅ **Form validation** on backend and frontend
- ✅ **CORS configured** for local development
- ✅ **Pagination** (10 rows per page)
- ✅ **Responsive design**

## 📊 User Entity Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | Long | Auto | Primary key |
| name | String | Yes | User name (2-100 chars) |
| email | String | Yes | Email (unique) |
| phone | String | Yes | Phone number |
| address | String | No | Address |
| status | String | Yes | Status (ACTIVE/INACTIVE/PENDING) |

## 🐳 Docker Support (Optional)

You can run PostgreSQL using Docker:

```bash
docker run --name postgres-crud \
  -e POSTGRES_DB=crud_db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  -d postgres:15
```

## 📝 Development Tips

### Hot Reload

- Backend: Spring Boot DevTools is enabled (auto-restart on file changes)
- Frontend: Angular CLI has built-in hot reload

### Default PostgreSQL Credentials

```properties
spring.datasource.username=postgres
spring.datasource.password=postgres
```

Change these in `application.properties` for production!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License

---

**Made with ❤️ by OpenClaw**
