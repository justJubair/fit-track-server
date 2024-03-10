----

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

Welcome to the backend repository of our FitTrack Application. This backend is built using Mongoose, Express, Node.js, and MongoDB, providing a robust and scalable foundation for our fitness tracking features.

## Features

- User authentication and authorization
- CRUD operations for blogs, workout challenges, modules, users friend list, and trainers.
- Data validation and error handling

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version >= 12.0.0)
- MongoDB (running locally or accessible)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/justJubair/fit-track-server.git
   cd fit-track-server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory with the following content:

   ```env
  dbURI ="Mongodb URL"
emailpass =Emaill Pass for nodemailer
siteemail=Your official emaill address
STRIPE_SECRET_KEY=stripe secret key

   ```

## Usage

### API Endpoints

Our API provides the following endpoints:

- `POST /api/v1/blogs`: Post a new blog.
- `GET /api/v1/dietplan/:email`: Query diet plan via user email.
- `GET /api/v1/all-blogs`: Retrieve all blogs.
- `GET /api/v1/blog/:id`: Get a speficic blog.
- `GET /api/v1/challenges`: Get all the challenges.
- `GET /api/v1/services`: Retrieve all services.
- `GET /api/v1/service/:id`: Retrieve a specific service.
- `POST /api/v1/postuserreview`: Create a new review.
- `DELETE /api/v1/comment-delete`: Delete a specific blog comment.
- `POST /api/exercises`: Create a new exercise.
- `GET /api/v1/users`: Retrieve all users.
- `GET /api/v1/singleuser`: Retrieve a specific user with email query.
- `PATCH /api/v1/userFriendUpdate`: Update a specific users friend list, filteration via user id.
- `PATCH /api/v1/bookMark/:id`: Update a specific users blog bookmark with email query.


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

If you'd like to contribute to the project, please follow the steps below:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## Acknowledgements

- Mention any libraries, frameworks, or tools used and give credit to their authors.
