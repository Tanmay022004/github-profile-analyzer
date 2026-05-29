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