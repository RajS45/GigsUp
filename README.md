# 🚀 GigsUp — Hyper Local Micro Job Engine

<p align="center">
  <img src="https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk" alt="Java 21">
  <img src="https://img.shields.io/badge/Spring%20Boot-Backend-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot">
  <img src="https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/PostGIS-Geospatial-008BB9?style=for-the-badge" alt="PostGIS">
  <img src="https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge&logo=jsonwebtokens" alt="JWT">
  <img src="https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JS-E34F26?style=for-the-badge&logo=javascript&logoColor=white" alt="Frontend">
</p>

<p align="center">
  <b>📍 Connecting Local Businesses with Students Through Location-Aware Micro Jobs.</b>
</p>

<p align="center">
  <i>Discover nearby opportunities. Match with local work. Get things done.</i>
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-features">Features</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Setup</a> •
  <a href="#-api-documentation">API Docs</a> •
  <a href="#-roadmap">Roadmap</a>
</p>

---

## 📍 About GigsUp

**GigsUp — Hyper Local Micro Job Engine** is a full-stack gig and shift-matching platform designed to connect students seeking flexible work with local vendors who need workers for short-term jobs.

Traditional job platforms often focus on long-term employment. GigsUp focuses on connecting people with shift-based opportunities through a simple digital platform.

Students can discover matching shifts, accept opportunities, and track their work. Vendors can post shifts, find suitable candidates, and manage the shift lifecycle.

The platform combines **Java, Spring Boot, PostgreSQL, PostGIS, JWT authentication, and a lightweight web frontend** to create a foundation for location-aware micro-job matching.

### 🔄 How GigsUp Works

```text
        🎓 Student                🏪 Vendor
             │                        │
             ▼                        ▼
       Register / Login         Register / Login
             │                        │
             ▼                        ▼
       Discover Shifts            Post a Shift
             │                        │
             └──────────┬─────────────┘
                        ▼
                📍 Shift Matching
                        │
                        ▼
                 🤝 Accept Shift
                        │
                        ▼
                 ✅ Complete Shift
```

---

## ✨ Key Features

### 🎓 Student Portal

- Student registration and login
- JWT-based authentication
- Browse and discover suitable shifts
- Match with available work opportunities
- Accept shifts
- View accepted shifts
- Complete shifts and track progress
- Mobile OTP verification flow with development mock SMS support

### 🏪 Vendor Portal

- Vendor registration and login
- JWT-based authentication
- Create and post gig shifts
- Find students matching shift requirements
- View posted shifts
- Manage shift-related workflows

### 📍 Location-Aware Matching

GigsUp uses PostgreSQL with PostGIS support to provide a foundation for geospatial functionality.

- Store and manage location-related data
- Support location-aware shift matching
- Build a foundation for finding nearby work opportunities
- Extend matching with distance and geographic filters

The exact matching behavior depends on the current backend implementation and configured shift data.

### 🔐 Authentication & Security

- JSON Web Token (JWT) authentication
- Role-based access control
- Separate student and vendor workflows
- Protected backend operations
- Environment-based configuration for sensitive credentials

### 🐳 Containerized Development

- Docker-based backend deployment
- PostgreSQL/PostGIS database container
- Docker Compose orchestration
- Persistent database volume
- Database health checks

### 🌐 Lightweight Frontend

- HTML5, CSS3, and JavaScript
- Separate frontend and backend
- REST API communication
- Student and vendor interfaces
- No React build step required

---

## 🏗️ System Architecture

```text
                  ┌──────────────────────┐
                  │    Student / Vendor  │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │    Web Frontend       │
                  │ HTML / CSS / JS       │
                  └──────────┬───────────┘
                             │
                       REST API + JWT
                             │
                             ▼
                  ┌──────────────────────┐
                  │   Spring Boot API    │
                  └──────────┬───────────┘
                             │
               ┌─────────────┼─────────────┐
               ▼             ▼             ▼
       ┌──────────────┐ ┌────────────┐ ┌─────────────┐
       │ Authentication│ │ Shift      │ │ Matching    │
       │ & Authorization│ │ Management │ │ Service     │
       └──────────────┘ └────────────┘ └──────┬──────┘
                                               │
                                               ▼
                                    ┌────────────────────┐
                                    │ PostgreSQL + PostGIS│
                                    └────────────────────┘
```

### 🔁 Core Workflow

1. A student or vendor registers and logs in.
2. The backend authenticates the user.
3. Vendors create shifts with the required details.
4. Students discover shifts through the matching workflow.
5. Students accept suitable shifts.
6. Shift status is updated as the work progresses.
7. Completed shifts can be tracked through the application.

---

## 🛠️ Technology Stack

### Backend

| Technology | Purpose |
|---|---|
| ☕ Java 21 | Backend programming language |
| 🌱 Spring Boot | REST API and application framework |
| 🧱 Gradle | Build and dependency management |
| 🔐 JWT | Authentication |
| 📍 PostGIS | Geospatial database capabilities |
| 🐘 PostgreSQL | Relational database |

### Frontend

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Frontend interactions and API requests |
| Fetch API | Backend communication |

### DevOps & Tools

| Technology | Purpose |
|---|---|
| 🐳 Docker | Containerization |
| 🐳 Docker Compose | Multi-container development environment |
| 🧪 Postman | API testing |
| 📝 Git | Version control |
| ☁️ GitHub | Source-code hosting |
| 💻 VS Code | Development environment |

---

## 📂 Project Structure

```text
GigsUp/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── verify-otp.html
│   ├── student-dashboard.html
│   ├── vendor-dashboard.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       ├── app.js
│       ├── auth.js
│       ├── student.js
│       └── vendor.js
│
├── src/
│   └── main/
│       ├── java/
│       │   └── ...
│       └── resources/
│           └── application.yml
│
├── Dockerfile
├── docker-compose.yml
├── build.gradle
├── settings.gradle
├── .gitignore
└── README.md
```

> The Java package structure is abbreviated for readability. The frontend filenames shown represent the application's page organization; check the repository for the exact current file list.

---

## 🚀 Getting Started

Follow these steps to run GigsUp locally.

### Prerequisites

Install the following tools:

- [Java JDK 21](https://adoptium.net/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/)
- Python 3, for serving the static frontend
- A modern web browser

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/RajS45/GigsUp.git
cd GigsUp
```

### 2️⃣ Configure Environment Variables

Create a `.env` file in the project root.

```env
DB_USERNAME=postgres
DB_PASSWORD=replace_with_a_strong_password
JWT_SECRET=replace_with_a_secure_random_secret
JWT_EXPIRATION=86400000
```

**Important:** Use a strong, randomly generated JWT secret and a secure database password. Do not commit `.env` to GitHub.

The provided configuration uses environment variables for database credentials and JWT settings.

### 3️⃣ Start the Backend and Database

Make sure Docker Desktop is running.

From the project root, execute:

```bash
docker compose up --build
```

Docker Compose builds the backend and starts the PostgreSQL/PostGIS database according to the project's configuration.

The backend is configured to expose port `8080`.

Check the running containers:

```bash
docker compose ps
```

View backend logs:

```bash
docker compose logs -f app
```

### 4️⃣ Start the Frontend

Open a second terminal in the project directory:

```bash
cd frontend
python -m http.server 5500
```

Open the application in your browser:

**[http://localhost:5500](https://gigsup-rrontend.onrender.com/)**

Keep the backend running in the first terminal.

### 5️⃣ Verify the Application

- Open the frontend.
- Register a student or vendor account.
- Log in using the appropriate account.
- Test the relevant shift workflows.
- Check the browser console and backend logs if an API request fails.

> The frontend currently defaults to `http://localhost:8080` for API requests. For production deployment, configure the actual backend URL and production CORS settings.

---

## 🔌 API Documentation

The following endpoints represent the core shift operations in the project.

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/shifts` | Create a shift |
| `POST` | `/api/shifts/match` | Find matching shifts |
| `POST` | `/api/shifts/{id}/accept` | Accept a shift |
| `POST` | `/api/shifts/{id}/complete` | Complete a shift |
| `GET` | `/api/shifts/posted` | Retrieve posted shifts |
| `GET` | `/api/shifts/accepted` | Retrieve accepted shifts |

**Local API base URL:** `http://localhost:8080`

The authentication, registration, and OTP routes are defined by the backend controllers. Refer to those controllers and the project's Postman collection for their exact request formats and authorization requirements.

### 🧪 Example API Testing Workflow

```text
1. Register Student
        │
        ▼
2. Register Vendor
        │
        ▼
3. Authenticate Users
        │
        ▼
4. Vendor Creates Shift
        │
        ▼
5. Test Shift Matching
        │
        ▼
6. Student Accepts Shift
        │
        ▼
7. Verify Accepted Shifts
        │
        ▼
8. Complete Shift
```

Use Postman to test requests and inspect HTTP status codes, response bodies, and authentication behavior.

---

## 🔐 Authentication with JWT

GigsUp uses JWT-based authentication to secure protected operations.

### Authentication Flow

1. The user registers or logs in.
2. The backend validates the credentials.
3. The backend issues an authentication token.
4. The frontend sends the token with protected API requests.
5. The backend validates the token and checks access permissions.

### Why JWT?

- Stateless authentication
- Convenient integration with REST APIs
- Support for protected routes
- Role-based authorization workflows
- No need to maintain a traditional server-side session for each authenticated request

Tokens must be handled securely. For production, use HTTPS, appropriate token storage, and strict authorization checks.

---

## 🐳 Docker Commands

### Start the Application

```bash
docker compose up --build
```

### Run in the Background

```bash
docker compose up -d --build
```

### Check Container Status

```bash
docker compose ps
```

### View Backend Logs

```bash
docker compose logs -f app
```

### View Database Logs

```bash
docker compose logs -f gigsup-db
```

### Stop Containers

```bash
docker compose down
```

The PostgreSQL database uses a persistent Docker volume. Running `docker compose down` without `-v` preserves that volume.

---

## 🧪 Testing Checklist

Use this checklist when validating the application locally.

- [ ] Database container starts successfully.
- [ ] Backend starts without configuration errors.
- [ ] Student registration works.
- [ ] Vendor registration works.
- [ ] Login and JWT authentication work.
- [ ] Vendor can post a shift.
- [ ] Shift matching returns appropriate results.
- [ ] Student can accept a shift.
- [ ] Posted and accepted shift listings work.
- [ ] Shift completion works.
- [ ] Protected operations enforce authorization.
- [ ] Invalid requests return appropriate errors.

---

## 🔒 Security Considerations

- Never expose `.env`, JWT secrets, database passwords, or access tokens.
- Do not use development-only OTP behavior in production.
- Validate requests on the backend.
- Enforce role-based permissions on every protected operation.
- Configure CORS for the actual frontend origin.
- Use HTTPS for deployed services.
- Restrict database access and use strong credentials.
- Review error messages and logs to ensure they do not expose sensitive information.

---

## ☁️ Deployment

GigsUp is structured around a separate frontend, backend API, and database. Production deployment requires these components to communicate using their public service addresses.

### Deployment Architecture

```text
       🌐 Student / Vendor
                │
                ▼
       ┌──────────────────┐
       │ Hosted Frontend  │
       │ HTML / CSS / JS  │
       └────────┬─────────┘
                │ HTTPS API
                ▼
       ┌──────────────────┐
       │ Hosted Backend   │
       │ Spring Boot      │
       └────────┬─────────┘
                │
                ▼
       ┌──────────────────┐
       │ PostgreSQL +     │
       │ PostGIS Database │
       └──────────────────┘
```

### Production Requirements

- Deploy PostgreSQL with PostGIS support.
- Configure production database environment variables.
- Set a secure JWT secret.
- Deploy the Spring Boot backend.
- Host the static frontend.
- Configure the frontend's API base URL.
- Configure CORS and HTTPS.
- Test registration, login, matching, acceptance, and completion against the deployed services.

**Deployment status:** Configure this section with live URLs after successfully deploying and testing the application. Do not use `localhost` for the public frontend's API address.

---

## 🌍 Real-World Applications

GigsUp can serve as a foundation for:

- 🎓 Students seeking part-time work
- 🏪 Local shops and small businesses
- 🍽️ Restaurants and cafes needing temporary staff
- 📦 Local delivery and event-support shifts
- 🎪 Event-based temporary staffing
- 📍 Neighborhood-level job discovery
- 🤝 Short-term workforce coordination

These are potential application areas rather than claims that each use case is already implemented.

---

## 🔮 Future Enhancements

### 📍 Smarter Matching

- Distance-based ranking
- Search by radius and location
- Availability-based matching
- Skill-based recommendations
- Improved shift discovery filters

### 🎓 Student Experience

- Student profile and skills management
- Work history and completed-shift records
- Shift reminders and notifications
- Availability calendar

### 🏪 Vendor Experience

- Vendor dashboards and analytics
- Candidate management
- Shift cancellation workflows
- Ratings and reviews

### ⚙️ Platform Improvements

- Automated backend tests
- CI/CD pipeline
- Production monitoring and logging
- Improved OTP delivery integration
- Deployment automation
- Enhanced security and rate limiting

---

## 🤝 Contributing

Contributions, ideas, and improvements are welcome!

### 1. Fork the Repository

Fork the project from GitHub.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/GigsUp.git
cd GigsUp
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "Add your feature"
```

### 5. Push Your Branch

```bash
git push origin feature/your-feature
```

Open a pull request with a description of your changes.

---

## 📜 License

No specific license is currently documented here. Add a `LICENSE` file to the repository before distributing the project under a chosen open-source license.

---

## 👨‍💻 Author

**Raj S.**

🌐 **GitHub:** [@RajS45](https://github.com/RajS45)

📦 **Repository:** [GigsUp — Hyper Local Micro Job Engine](https://github.com/RajS45/GigsUp)

---

## ⭐ Support the Project

If you find GigsUp interesting:

- ⭐ Star the repository
- 🍴 Fork the project
- 🐛 Report bugs
- 💡 Suggest new features
- 🤝 Contribute improvements

---

<p align="center">
  <b>📍 GigsUp — Bringing Local Opportunities Closer to You. 🚀</b>
  <br><br>
  <i>Built to connect people, opportunities, and local communities.</i>
</p>
