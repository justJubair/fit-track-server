---

# FitTrack Application Backend

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Sample Requests](#sample-requests)
- [Database Schema](#database-schema)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

Welcome to the backend repository of our Fitness Tracking Application. This backend is built using Mongoose, Express, Node.js, and MongoDB, providing a robust and scalable foundation for our fitness tracking features.

## Features

- User authentication and authorization
- CRUD operations for user profiles, workouts, and exercises
- Data validation and error handling
- Token-based authentication for secure API access

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version >= 12.0.0)
- MongoDB (running locally or accessible)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fitness-tracking-backend.git
   cd fitness-tracking-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory with the following content:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/fitness_app
   JWT_SECRET=yourSecretKey
   ```

   Adjust the values according to your preferences.

## Usage

### API Endpoints

Our API provides the following endpoints:

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Authenticate and receive an access token.
- `GET /api/profile`: Retrieve user profile information.
- `POST /api/workouts`: Create a new workout.
- `GET /api/workouts`: Retrieve all workouts.
- `GET /api/workouts/:id`: Retrieve a specific workout.
- `PUT /api/workouts/:id`: Update a specific workout.
- `DELETE /api/workouts/:id`: Delete a specific workout.
- `POST /api/exercises`: Create a new exercise.
- `GET /api/exercises`: Retrieve all exercises.
- `GET /api/exercises/:id`: Retrieve a specific exercise.
- `PUT /api/exercises/:id`: Update a specific exercise.
- `DELETE /api/exercises/:id`: Delete a specific exercise.

### Authentication

To access protected routes, include the JWT token in the Authorization header:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Sample Requests

#### Register a new user:

```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securepassword"
}
```

#### Log in and get an access token:

```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securepassword"
}
```

## Database Schema

We use MongoDB with the following schema:

- Users
  - _id
  - username
  - password (hashed)

- Workouts
  - _id
  - userId (reference to Users)
  - title
  - description
  - date
  - exercises (array of exercise objects)

- Exercises
  - _id
  - name
  - description
  - category



## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- Mention any libraries, frameworks, or tools used and give credit to their authors.

---