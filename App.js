// frontend/src/App.js
import { useState } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovie = async () => {
    if (!title) return;
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`http://localhost:5000/api/movies/${title}`);
      setMovie(res.data);
    } catch {
      setError("Movie not found");
      setMovie(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Movie Search App</h1>
      <input
        placeholder="Enter movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={fetchMovie} style={{ padding: "8px 12px" }}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {movie && (
        <div style={{ marginTop: "10px", border: "1px solid #ccc", padding: "10px", width: "250px" }}>
          <p><strong>Title:</strong> {movie.title}</p>
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Director:</strong> {movie.director}</p>
        </div>
      )}
    </div>
  );
}

export default App;
