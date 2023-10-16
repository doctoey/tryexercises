const express = require("express");
const router = express.Router();

const restaurants = require("../data");
let currentRestaurantId = restaurants.length;

//   /apis/restaurants แต่มี router แยกไว้ในไฟล์นี้แล้ว จึงต้องเอา /apis/restaurants ออก แล้วใส่เป็น / แทน
router.get("/", (req, res) => {
  // res.send("get api restaurants");
  res.json(restaurants);
});

router.get("/:id", (req, res) => {
  // res.send("get api restaurants by id");
  // req.params.id
  console.log(req.params.id);
  const restaurantId = Number.parseInt(req.params.id, 10); // ต้องใช้ parseInt เพราะว่า req.params.id จะเป็น string แต่เราต้องการให้เป็น number และ 10 คือเลขฐานที่ใช้แปลง
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  ); // หา restaurant ที่มี id ตรงกับ restaurantId ที่เราส่งมา
  res.json(restaurant);
});

router.post("/", (req, res) => {
  // req.body.id = restaurants.length + 1;
  // console.log(req.body);
  // res.send("post api restaurants");
  currentRestaurantId += 1;
  const newRestaurant = {
    id: currentRestaurantId,
    ...req.body,
  };
  restaurants.push(newRestaurant);
  res.json(newRestaurant);
});

router.put("/:id", (req, res) => {
  // res.send("put api restaurants");
  const restaurantId = Number.parseInt(req.params.id, 10);
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantId
  );
  const updatedRestaurant = {
    id: restaurantId,
    ...req.body,
  };
  restaurants[restaurantIndex] = updatedRestaurant;
  res.json(updatedRestaurant);
});

router.delete("/:id", (req, res) => {
  // res.send("delete api restaurants");
  const restaurantId = Number.parseInt(req.params.id, 10);
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantId
  );
  restaurants.splice(restaurantIndex, 1);
  res.sendStatus(204);
});

module.exports = router;

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
