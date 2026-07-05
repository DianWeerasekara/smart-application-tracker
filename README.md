# 📋 Smart Job Application Tracker API

A production-ready REST API for tracking job applications through 
their entire lifecycle — from applied to offer.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=jsonwebtokens)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=swagger&logoColor=black)

## 🔗 Live Demo
- **API Base URL:** [https://your-app.render.com/api](https://smart-application-tracker-dxv4.onrender.com/api)
- **Swagger Docs:** [https://your-app.render.com/api-docs](https://smart-application-tracker-dxv4.onrender.com/api-docs/)

---

## 🏗️ Architecture

![Architecture Diagram](./docs/architecture.png)

---

## ✨ Features

- JWT Authentication (Register, Login, Refresh Token)
- Full CRUD for job applications
- Filter applications by status, company, date
- Email reminders for upcoming interviews
- Rate limiting and input validation
- Full API documentation with Swagger UI
- Environment-based configuration

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT + Bcrypt |
| Docs | Swagger / OpenAPI |
| Deployment | Render |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Installation

# Clone the repository
git clone https://github.com/yourusername/job-tracker-api.git
cd job-tracker-api

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Fill in your values in .env

# Start development server
npm run dev

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login and get token |

### Applications
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/applications | Get all applications |
| POST | /api/applications | Create new application |
| GET | /api/applications/:id | Get single application |
| PUT | /api/applications/:id | Update application |
| DELETE | /api/applications/:id | Delete application |

> Full interactive documentation available at `/api-docs`

---

## 📁 Folder Structure

src/
├── config/         # DB and environment config
├── controllers/    # Route handler logic
├── middleware/     # Auth, validation, rate limit
├── models/         # Mongoose schemas
├── routes/         # Express routers
├── services/       # Email and other services
├── utils/          # Helper functions
└── server.js       # Entry point

---

## 🔮 Roadmap

- [ ] Add MySQL support as alternative database
- [ ] Analytics dashboard endpoint
- [ ] OAuth2 (Google login)
- [ ] Docker support

---

## 👨‍💻 Author

**Dian Weerasekara**
- LinkedIn: [linkedin.com/in/yourprofile](https://www.linkedin.com/in/dian-weerasekara-446b861aa/)
- GitHub: github.com/DianWeerasekara
