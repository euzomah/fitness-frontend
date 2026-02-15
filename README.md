# Fitness Frontend (AWS Serverless Fitness App)

React frontend for a serverless fitness tracking application.

This project connects to an AWS serverless backend built with:

* AWS API Gateway
* AWS Lambda
* DynamoDB
* S3 + CloudFront deployment ready

Users can:

* Add workouts
* View workouts
* Delete workouts
* Track exercise performance

---

## Tech Stack

Frontend:

* React + Vite
* JavaScript
* Fetch API

Backend (separate repo):

* AWS Lambda (Python)
* API Gateway
* DynamoDB
* Serverless architecture

---

## Local Development

Install dependencies:

npm install

Start dev server:

npm run dev

Open:

http://localhost:5173

---

## Configure API Endpoint

Update the API Gateway URL inside the app:

Example:

https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com/prod

Without this step the frontend will show:

TypeError: Failed to fetch

(This usually means CORS or wrong endpoint.)

---

## Deployment Plan

Frontend will be deployed to:

* AWS S3 static hosting
* AWS CloudFront CDN

Backend is already serverless.

---

## Portfolio Purpose

This project demonstrates:

* Full-stack AWS serverless architecture
* API integration
* Cloud deployment workflow
* React frontend development

---

## Author

Elvis Uzomah
Cloud Engineer in progress
