// backend/server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const API_KEY = "YOUR_OMDB_API_KEY"; // Get free from http://www.omdbapi.com/apikey.aspx
const EXTERNAL_API = "http://www.omdbapi.com/";

// Route to fetch movie details
app.get("/api/movies/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const response = await axios.get(EXTERNAL_API, {
      params: { t: title, apikey: API_KEY },
    });

    if (response.data.Response === "False") {
      return res.status(404).json({ error: "Movie not found" });
    }

    const data = {
      title: response.data.Title,
      year: response.data.Year,
      rating: response.data.imdbRating,
      genre: response.data.Genre,
      director: response.data.Director,
    };

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movie" });
  }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
