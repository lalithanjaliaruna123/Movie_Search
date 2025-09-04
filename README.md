## Movie Search App

A simple Full-Stack Movie Search Application built with React.js (frontend) and Node.js + Express (backend). The app fetches movie data from the OMDb API and displays it in real-time.

## Features

Search movies by title

View movie details: title, year, rating, genre, and director

Full-stack architecture: React frontend + Node.js backend

Uses Axios to call the backend API

Backend uses CORS to allow frontend requests

Automatic server restart with nodemon

## Project Structure
movie-search/
│
├─ backend/
│   ├─ server.js
│   └─ package.json
│
└─ frontend/
    ├─ package.json
    ├─ public/
    │   └─ index.html
    └─ src/
        ├─ App.js
        └─ index.js

## Getting Started
## 1. Clone the repository
git clone <YOUR_REPO_URL>
cd movie-search

## 2. Backend Setup
cd backend
npm init -y
npm install express axios cors
npm install nodemon --save-dev
npm install
npm start


Server will run on http://localhost:5000

Test: http://localhost:5000/api/movies/Inception

3. Frontend Setup
cd ../frontend
npx create-react-app .
npm install axios
npm start


React app will open on http://localhost:3000

Type a movie title and click Search to fetch data from the backend

Dependencies
Backend

express

axios

cors

nodemon (dev dependency)

Frontend

react

react-dom

react-scripts

axios

Usage

Start backend: npm start (backend folder)

Start frontend: npm start (frontend folder)

Open http://localhost:3000 in your browser

Enter a movie title and view details
