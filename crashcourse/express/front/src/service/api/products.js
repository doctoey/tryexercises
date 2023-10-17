import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get("https://dummyjson.com/products", {
    crossdomain: true,
  });
  console.log(response.data, "response.data");
  const products = response.data.products;
  return products;
};
//get by :id