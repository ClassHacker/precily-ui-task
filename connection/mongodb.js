const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB Connection error: "));
db.once("open", () => {
    console.log("DB connected successfully");
});