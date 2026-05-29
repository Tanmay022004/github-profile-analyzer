# GitHub Profile Analyzer API

This project is a simple backend API built using Node.js, Express.js, and MySQL.
It fetches public GitHub profile data using the GitHub API, analyzes some useful information, and stores the results in a MySQL database.

The project was created as part of an internship assignment.

---

## Features

* Fetch GitHub profile data using username
* Store analyzed profile data in MySQL
* Get all stored profiles
* Get details of a single profile
* Swagger API documentation
* Rate limiting for basic API protection
* Clean folder structure using MVC pattern

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub Public API
* Swagger UI
* Express Rate Limit

---

## Folder Structure

```txt id="r7q9m2"
github-profile-analyzer/
│
├── config/
├── controllers/
├── docs/
├── models/
├── routes/
├── services/
├── sql/
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## Installation

Clone the repository:

```bash id="71pt2l"
git clone https://github.com/your-username/github-profile-analyzer.git
```

Move into the project folder:

```bash id="9bq86n"
cd github-profile-analyzer
```

Install dependencies:

```bash id="f3t4ol"
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory and add the following:

```env id="x83dte"
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Tanmay@022004
DB_NAME=github_analyzer
```

---

## Database Setup

Run the SQL script from:

```txt id="9edv8q"
sql/schema.sql
```

Or create the table manually:

```sql id="8v4r1l"
CREATE DATABASE github_analyzer;

USE github_analyzer;

CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    github_id BIGINT,
    username VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    bio TEXT,
    public_repos INT,
    followers INT,
    following INT,
    account_created_at DATETIME,
    profile_url VARCHAR(500),
    avatar_url VARCHAR(500),
    location VARCHAR(255),
    company VARCHAR(255),
    blog VARCHAR(500),
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Running the Project

Start the server in development mode:

```bash id="1o8e1w"
npm run dev
```

For production:

```bash id="h1qf5r"
npm start
```

Server will run on:

```txt id="4o7q3z"
http://localhost:5000
```

---

## API Endpoints

### Analyze GitHub Profile

Fetches profile data from GitHub and stores it in the database.

```http id="0hq91n"
GET /api/github/analyze/:username
```

Example:

```http id="i9e8bo"
GET /api/github/analyze/octocat
```

---

### Get All Profiles

```http id="l73z2w"
GET /api/github/profiles
```

---

### Get Single Profile

```http id="d2w1rt"
GET /api/github/profiles/:username
```

Example:

```http id="2a9qmx"
GET /api/github/profiles/octocat
```

---

## Swagger Documentation

Swagger documentation is available at:

```txt id="i1a3vl"
http://localhost:5000/api-docs
```

---

## Rate Limiting

The API uses express-rate-limit middleware.

Limit:

* 100 requests per 15 minutes per IP

---

## Packages Used

```bash id="r1kl0s"
npm install express mysql2 axios dotenv cors
npm install swagger-ui-express swagger-jsdoc
npm install express-rate-limit
npm install nodemon --save-dev
```

---

## Future Improvements

Some improvements that can be added later:

* Repository analysis
* Most used programming language
* Authentication using JWT
* Docker support
* Unit testing
* GitHub contribution analysis

---

## Author

Tanmay

---

## Note

This project was built for learning purposes and internship evaluation.
