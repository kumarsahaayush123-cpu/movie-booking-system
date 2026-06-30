# 🎬 Movie Ticket Booking System

A full-stack Movie Ticket Booking System developed using **HTML, CSS, JavaScript, Spring Boot, and MySQL**. The application allows users to register, log in, browse movies, select seats, make payments, and generate booking tickets.

---

# 📖 Table of Contents

- Project Overview
- Features
- Technology Stack
- System Architecture
- Project Structure
- Database Design
- Installation Guide
- Running the Project
- Application Workflow
- Screenshots
- API Overview
- Database Schema
- Future Enhancements
- Learning Outcomes
- Conclusion
- Author
- License

---

# 📌 Project Overview

The Movie Ticket Booking System is designed to simplify the process of booking movie tickets online.

Instead of standing in long queues, users can:

- Create an account
- Login securely
- Browse available movies
- Search and filter movies
- Select seats
- View ticket price
- Make payment
- Generate digital tickets

The project demonstrates frontend development, backend development, database integration, and basic software engineering concepts.

---

# ✨ Features

## User Module

- User Registration
- User Login
- Logout
- Form Validation

---

## Movie Module

- Display Available Movies
- Movie Posters
- Movie Details
- Search Movies
- Filter by Genre

---

## Booking Module

- Seat Selection
- Real-Time Seat Count
- Total Price Calculation
- Prevent Double Selection

---

## Payment Module

- UPI Payment
- Credit Card
- Debit Card
- Cash Payment
- Payment Confirmation

---

## Ticket Module

- Digital Ticket Generation
- Movie Details
- Selected Seats
- Total Amount
- Booking Date & Time

---

## Database Module

- Store Users
- Store Movies
- Store Bookings
- Store Payments

---

# 💻 Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

---

## Backend

- Java 17
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate
- Maven

---

## Database

- MySQL 8.0

---

## Development Tools

- Visual Studio Code
- MySQL Workbench
- Git
- GitHub
- Live Server

---

# 🏗 System Architecture

```
                User

                  │

                  ▼

       HTML + CSS + JavaScript

                  │

            HTTP Request

                  │

                  ▼

        Spring Boot Backend

                  │

       Spring Data JPA / Hibernate

                  │

                  ▼

            MySQL Database
```

---

# 📂 Project Structure

```
Movie Ticket Booking
│
├── frontend
│   │
│   ├── css
│   │     ├── style.css
│   │     ├── login.css
│   │     ├── movie.css
│   │     ├── seat.css
│   │     ├── payment.css
│   │     └── ticket.css
│   │
│   ├── images
│   │     ├── hero.png
│   │     ├── avenger.jpg
│   │     ├── kalki.jpg
│   │     ├── puspa.jpg
│   │     └── logo.jpg
│   │
│   ├── js
│   │     ├── app.js
│   │     ├── login.js
│   │     ├── movie.js
│   │     ├── seat.js
│   │     ├── payment.js
│   │     └── ticket.js
│   │
│   ├── pages
│   │     ├── login.html
│   │     ├── register.html
│   │     ├── movies.html
│   │     ├── seat.html
│   │     ├── payment.html
│   │     └── ticket.html
│   │
│   └── index.html
│
│
├── backend
│   │
│   ├── src
│   │    └── main
│   │         ├── java
│   │         └── resources
│   │              └── application.properties
│   │
│   ├── pom.xml
│   └── mvnw
│
└── README.md
```

---

# 🗄 Database Design

The application uses four major tables.

---

## 1. Users Table

| Field | Type |
|--------|------|
| id | BIGINT |
| name | VARCHAR |
| email | VARCHAR |
| phone | VARCHAR |
| password | VARCHAR |

Purpose:

Stores user registration details.

---

## 2. Movies Table

| Field | Type |
|--------|------|
| id | INT |
| title | VARCHAR |
| genre | VARCHAR |
| duration | VARCHAR |
| language | VARCHAR |
| price | DECIMAL |
| image | VARCHAR |
| available_seats | INT |

Purpose:

Stores movie information.

---

## 3. Bookings Table

| Field | Type |
|--------|------|
| booking_id | BIGINT |
| user_id | BIGINT |
| movie_id | INT |
| seats | VARCHAR |
| total_amount | DECIMAL |
| booking_date | TIMESTAMP |

Purpose:

Stores booking information.

---

## 4. Payments Table

| Field | Type |
|--------|------|
| payment_id | BIGINT |
| booking_id | BIGINT |
| payment_method | VARCHAR |
| amount | DECIMAL |
| payment_date | TIMESTAMP |
| status | VARCHAR |

Purpose:

Stores payment details.

---

# 🔄 Application Workflow

```
Landing Page

      ↓

Register

      ↓

Login

      ↓

Browse Movies

      ↓

Select Movie

      ↓

Select Seats

      ↓

Payment

      ↓

Generate Ticket

      ↓

Booking Completed
```

---

# ⚙ Installation Guide

## Step 1

Clone Repository

```bash
git clone https://github.com/yourusername/movie-ticket-booking.git
```

---

## Step 2

Open frontend using Live Server.

```
frontend/index.html
```

---

## Step 3

Start MySQL Server.

Create database:

```sql
CREATE DATABASE movie_booking;
```

---

## Step 4

Configure application.properties

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/movie_booking
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update

spring.jpa.show-sql=true
```

---

## Step 5

Run Backend

```
cd backend
```

Windows

```
.\mvnw.cmd spring-boot:run
```

Mac/Linux

```
./mvnw spring-boot:run
```

---

## Step 6

Open Browser

```
http://localhost:5500
```

or

```
http://127.0.0.1:5500
```

---

# 📷 Screenshots

Include screenshots of:

- Home Page
- Login Page
- Registration Page
- Movies Page
- Seat Selection
- Payment Page
- Ticket Page
- MySQL Database
- Spring Boot Running

---

# REST API (Backend)

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /register | Register User |
| POST | /login | Login User |
| GET | /movies | Get Movies |
| POST | /book | Book Ticket |
| POST | /payment | Save Payment |

---

# Database Relationships

```
Users
   │
   │
   ▼

Bookings

▲       ▲

│       │

Movies  Payments
```

---

# Advantages

- User Friendly Interface
- Responsive Design
- Secure Login
- Organized Database
- Easy Seat Selection
- Digital Ticket Generation
- Modular Code Structure
- Scalable Architecture

---

# Future Enhancements

- JWT Authentication
- Online Razorpay Integration
- Email Ticket
- QR Code Ticket
- Booking Cancellation
- Refund System
- Admin Dashboard
- Movie Recommendation
- OTP Verification
- Password Encryption
- Booking History
- User Profile
- Dark Mode
- Mobile Application

---

# Learning Outcomes

During this project we learned:

- HTML5 Layout Design
- CSS Styling
- JavaScript DOM Manipulation
- Form Validation
- Spring Boot Development
- REST API Basics
- MySQL Database Design
- JPA & Hibernate
- CRUD Operations
- MVC Architecture
- Client-Server Communication
- GitHub Project Management

---

# Challenges Faced

- Connecting Spring Boot with MySQL
- Java Version Compatibility
- Configuring Maven
- Database Relationship Errors
- Foreign Key Constraints
- Frontend Navigation
- Seat Selection Logic

These challenges helped improve our debugging and problem-solving skills.

---

# Conclusion

The Movie Ticket Booking System successfully demonstrates a complete web application workflow from user registration to ticket generation. It integrates a responsive frontend, a Spring Boot backend, and a MySQL database, providing a practical understanding of full-stack web development concepts. The project can be further enhanced with secure authentication, online payment gateways, and an administrative dashboard to make it production-ready.

---

# 👨‍💻 Author

**Aayush Sah**

Computer Science & Engineering

Movie Ticket Booking System

2026

---

# 📜 License

This project is developed for educational purposes.

Free to use for learning and academic demonstrations.

---

# ⭐ Acknowledgements

- Spring Boot Documentation
- MySQL Documentation
- Oracle Java Documentation
- Visual Studio Code
- GitHub
- OpenAI ChatGPT (Development Assistance)
