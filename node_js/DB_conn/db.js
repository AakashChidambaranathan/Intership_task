const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userdata", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error:", err));

module.exports = mongoose;
