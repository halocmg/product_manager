const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 8000;
const DB = "pirates"

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.get("/api", (res, req) => {
    res.send("Working")
})

// Connection to Mongoose
require("./server/config/config")(DB)

// // Connection to routing
require("./server/routes/pirates.routes")(app)

app.listen(PORT, () => console.log(`server up on port ${PORT}`))
