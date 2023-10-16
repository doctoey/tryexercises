const express = require("express");
const { engine } = require("express-handlebars");
const cors = require('cors');

const restaurantsRouter = require("./routes/restaurants");

const logger = require("./middleware/logger");

const app = express();
app.use(cors());
// template engine
app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");

// middleware
app.use(express.json()); // ใช้ middleware ของ express ในการ parse json ที่ส่งมาให้เป็น object ให้เราเลย
app.use(express.urlencoded({ extended: false })); // ใช้ middleware ของ express ในการ parse urlencoded ที่ส่งมาให้เป็น object ให้เราเลย

// custom middleware
app.use(logger);

// routes
app.use("/apis/restaurants", restaurantsRouter);

app.get("/", (req, res) => {
  // res.send("Hello World");
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// app.get("/apis/restaurants", (req, res) => {
//   res.send("get api restaurants");
// });

// app.get("/apis/restaurants/:id", (req, res) => {
//   res.send("get api restaurants by id");
// });

// app.post("/apis/restaurants", (req, res) => {
//   res.send("post api restaurants");
// });

// app.put("/apis/restaurants/:id", (req, res) => {
//   res.send("put api restaurants");
// });

// app.delete("/apis/restaurants/:id", (req, res) => {
//   res.send("delete api restaurants");
// });
