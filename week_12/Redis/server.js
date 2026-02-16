    const express = require("express");
    const { createClient } = require("redis");

    const app = express();
    const PORT = 3000;

    const redisClient = createClient();

    redisClient.on("error", (err) => console.error("Redis Error:", err));

    (async () => {
    await redisClient.connect();
    console.log("Redis connected ✅");
    })();

    app.get("/photos", async (req, res) => {
    try {

        const cached = await redisClient.get("photos");

        if (cached) {
        console.timeEnd("Response Time /photos");
        return res.json({
            source: "Redis Cache",
            data: JSON.parse(cached),
        });
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const photos = await response.json();
        await redisClient.set("photos", JSON.stringify(photos), { EX: 60 });
        console.timeEnd("Response Time /photos");
        res.json({
        source: "API",
        data: photos,
        });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
    });
    app.get("/photos/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const cached = await redisClient.get("photos");
        if (cached) {
        const photos = JSON.parse(cached);
        const photo = photos.find((p) => p.id === id);
        if (!photo) {
            return res.status(404).json({ error: "Photo not found" });
        }
        return res.json({
            source: "Redis Cache",
            data: photo,
        });
        }
        const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`,
        );
        const photo = await response.json();
        res.json({
        source: "API",
        data: photo,
        });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
    });

    app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });
