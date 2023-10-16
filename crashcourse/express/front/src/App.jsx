import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  // const [restaurants, setRestaurants] = useState([]); // สร้าง state ชื่อ restaurants และกำหนดให้เป็น array ว่างไว้
  const [products, setProducts] = useState([]); // สร้าง state ชื่อ restaurants และกำหนดให้เป็น array ว่างไว้

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/apis/restaurants",
          { crossdomain: true }
        );
        const restaurants = response.data;
        setRestaurants(restaurants);
      } catch (error) {
        console.error(error);
      }
    };
    getRestaurants();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products", {
        crossdomain: true,
      });
      const products = response.data.products;
      setProducts(products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await axios.get('https://dummyjson.com/products' , { crossdomain: true })
  //     const products = response.data
  //     setProducts(products)
  //   }
  //   getProducts()
  // }, [])

  // const restaurant = async () => {
  //   const restaurant = await axios.get('http://localhost:3000/apis/restaurants' , { crossdomain: true })
  //   restaurant = restaurant.data
  // }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        {/* {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.type}</p>
            <p>{restaurant.rating}</p>
          </div>
        ))} */}
      </div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.color}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
