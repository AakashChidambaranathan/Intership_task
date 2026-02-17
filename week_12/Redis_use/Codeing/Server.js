const express = require("express");
const axios = require("axios");
const cors = require("cors");
const Redis = require("redis");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const DEFAULT_EXPIRATION = 3600;

// ✅ Redis client
const client = Redis.createClient();

client.on("error", (err) => {
  console.error("Redis Error:", err);
});

// connect redis
(async () => {
  await client.connect();
})();

// ------------------
// PHOTOS WITH CACHE
// ------------------
app.get("/photos", async (req, res) => {
  const albumid = req.query.albumid;

  try {
    const photos = await client.get("photos");

    if (photos) {
      console.log("Cache Hit");
      return res.json(JSON.parse(photos));
    }

    console.log("Cache Miss");

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
      { params: { albumId: albumid } },
    );

    await client.setEx("photos", DEFAULT_EXPIRATION, JSON.stringify(data));

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// ------------------
// PHOTO BY ID (NO CACHE)
// ------------------
app.get("/photos/:id", async (req, res) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${req.params.id}`,
  );
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
