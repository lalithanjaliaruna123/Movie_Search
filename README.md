```
# Movie Search App

A simple **Full-Stack Movie Search Application** built with **React.js** (frontend) and **Node.js + Express** (backend). The app fetches movie data from the **OMDb API** and displays it in real-time.

---

## **Features**

- Search movies by title  
- View movie details: title, year, rating, genre, and director  
- Full-stack architecture: React frontend + Node.js backend  
- Uses Axios to call the backend API  
- Backend uses CORS to allow frontend requests  
- Automatic server restart with `nodemon`

---

## **Project Structure**

```text
movie-search/
│
├── backend/                # Node.js backend
│   ├── server.js           # Express server and API routes
│   └── package.json        # Backend dependencies & scripts
│
└── frontend/               # React frontend
    ├── package.json        # Frontend dependencies & scripts
    ├── public/             # Public files served by React
    │   └── index.html      # HTML template for React
    └── src/                # React source code
        ├── App.js          # Main React component
        └── index.js        # React entry point
```

---

## **Getting Started**

### **1. Clone the repository**

```bash
git clone <YOUR_REPO_URL>
cd movie-search
```

---

### **2. Backend Setup**

```bash
cd backend
npm install
npm start
```

- Server will run on `http://localhost:5000`  
- Test: `http://localhost:5000/api/movies/Inception`

---

### **3. Frontend Setup**

```bash
cd ../frontend
npx create-react-app frontend
cd frontend
npm install axios
npm install
npm start
```

- React app will open on `http://localhost:3000`  
- Type a movie title and click **Search** to fetch data from the backend

---

## **Dependencies**

### Backend

- express  
- axios  
- cors  
- nodemon (dev dependency)

### Frontend

- react  
- react-dom  
- react-scripts  
- axios

---

## **Usage**

1. Start backend: `npm start` (backend folder)  
2. Start frontend: `npm start` (frontend folder)  
3. Open `http://localhost:3000` in your browser  
4. Enter a movie title and view details  

---

## **Notes**

- You need an **OMDb API key** to fetch real movie data. Replace `YOUR_OMDB_API_KEY` in `backend/server.js`.  
- Make sure the backend is running **before** using the frontend.  

---

## **Future Improvements**

- Display multiple search results  
- Save search history in local storage  
- Add better styling with CSS or a UI library  
- Deploy to platforms like **Heroku** or **Vercel**
```
