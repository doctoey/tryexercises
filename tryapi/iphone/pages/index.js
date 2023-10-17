import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {

  const [products, setProducts] = useState();

  useEffect(()=> {
    axios.get("https://dummyjson.com/products")
    .then((res)=>{
      setProducts(res.data.products)
    })
  }, [])
  console.log(products,"===products===")

  return (
    <>
      <div>
        {products?.map((data)=> (
          <>

          <div style={{tabSize:"20px"}}>
            {data.id} +   
          </div>
          <button>
            {data.title}

          </button>
          </>
        
        ))}
      </div>
    </>
  )
}
