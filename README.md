🎬 Movie Ticket Booking System
📌 Project Overview


The Movie Ticket Booking System is a web-based application developed using HTML, CSS, JavaScript, Spring Boot, and MySQL. It allows users to register, log in, browse available movies, select seats, make payments, and generate booking tickets.

This project demonstrates the integration of a responsive frontend with a Spring Boot backend and a MySQL database.

🚀 Features

User Registration
User Login
Movie Listing
Search Movies
Filter Movies by Genre
Seat Selection
Real-Time Price Calculation
Payment Module
Ticket Generation
MySQL Database Integration
🛠 Technologies Used

Frontend

HTML5
CSS3
JavaScript

Backend

Java 17
Spring Boot
Spring Data JPA
Hibernate
Maven
Database
MySQL 8.0
IDE & Tools
Visual Studio Code
MySQL Workbench
Git & GitHub

📁 Project Structure


Movie Ticket Booking
│
├── frontend
│   ├── css
│   │    ├── style.css
│   │    ├── login.css
│   │    ├── movie.css
│   │    ├── seat.css
│   │    ├── payment.css
│   │    └── ticket.css
│   │
│   ├── images
│   │
│   ├── js
│   │    ├── app.js
│   │    ├── login.js
│   │    ├── movie.js
│   │    ├── seat.js
│   │    ├── payment.js
│   │    └── ticket.js
│   │
│   ├── pages
│   │    ├── login.html
│   │    ├── register.html
│   │    ├── movies.html
│   │    ├── seat.html
│   │    ├── payment.html
│   │    └── ticket.html
│   │
│   └── index.html
│
└── backend
    ├── src
    ├── pom.xml
    └── application.properties

    
🗄 Database Tables

Users
Column	Type
id	BIGINT
name	VARCHAR
email	VARCHAR
phone	VARCHAR
password	VARCHAR


Movies
Column	Type
id	INT
title	VARCHAR
genre	VARCHAR
duration	VARCHAR
language	VARCHAR
price	DECIMAL
image	VARCHAR
available_seats	INT


Bookings
Column	Type
booking_id	BIGINT
user_id	BIGINT
movie_id	INT
seats	VARCHAR
total_amount	DECIMAL
booking_date	TIMESTAMP


Payments
Column	Type
payment_id	BIGINT
booking_id	BIGINT
payment_method	VARCHAR
amount	DECIMAL
payment_date	TIMESTAMP
status	VARCHAR

Workflow

Home Page
      │
      ▼
Register/Login
      │
      ▼
Movies
      │
      ▼
Select Seats
      │
      ▼
Payment
      │
      ▼
Generate Ticket


Sample Screens

Home Page
Login Page
Registration Page
Movie Listing
Seat Selection
Payment Page
Ticket Page
Database Tables


Future Enhancements

Online Payment Gateway
Email Ticket Confirmation
QR Code Ticket
Admin Dashboard
Movie Management
Booking History
User Profile
JWT Authentication

Learning Outcomes

Responsive Web Design
JavaScript DOM Manipulation
Spring Boot REST APIs
MySQL Database Design
CRUD Operations
JPA & Hibernate
MVC Architecture

Author

Aayush Sah

Computer Science & Engineering
