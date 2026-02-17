const express = require("express");
const { createClient } = require("redis");
const app = express();
const PORT = 3002;
const redisClient = createClient();
redisClient.on("error", (err) => console.error("Redis Error:", err));
let redisConnected = false;
(async () => {
try {
    await redisClient.connect();
    redisConnected = true;
    console.log("Redis connected ✅");
    } catch (err) {
        console.error(
        "Failed to connect to Redis (continuing without cache):",
        err.message || err,
        );
    }
    })();
    app.get("/photos", async (req, res) => {
    console.time("Response Time /photos");
    try {
        let cached;
        if (redisConnected && redisClient.isOpen) {
        cached = await redisClient.get("photos");
        }
        if (cached) {
        console.timeEnd("Response Time /photos");
        return res.json({
            source: "Redis Cache",
            data: JSON.parse(cached),
        });
        }
        if()
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const photos = await response.json();
        if (redisConnected && redisClient.isOpen) {
        try {
            await redisClient.set("photos", JSON.stringify(photos), { EX: 60 });
        } catch (e) {
            console.error("Failed to write to Redis cache:", e.message || e);
        }
        }
        console.timeEnd("Response Time /photos");
        res.json({
        source: "API",
        data: photos,
        });
    } catch (err) {
        console.error("/photos error:", err);
        res.status(500).json({ error: "Server error" });
    }
    });
    app.get("/photos/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        let cached;
            if (redisConnected && redisClient.isOpen) {
        cached = await redisClient.get("photos");
        }
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
        console.error("/photos/:id error:", err);
        res.status(500).json({ error: "Server error" });
    }
    });
    app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });
