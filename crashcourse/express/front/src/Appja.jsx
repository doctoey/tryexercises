import React, { useEffect, useState } from "react";
import { getProducts } from "./service/api/products";

function AppJaa() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }

    };
    fetch();
  }, []);

  return (
    <>
      <div>App2</div>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <div>{product.image}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AppJaa;
