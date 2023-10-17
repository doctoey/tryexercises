import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState()

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(response => {
      setProducts(response.data.products)
    })
  }, [])

  console.log(products, '===Products===')
  return (
    <>
      <div>
        {products?.map(data => (
          <>
            <div>{data.id}</div>
            <div>{data.title}</div>
            <div>{data.brand}</div>
            <div>{data.category}</div>
            <div>{data.description}</div>
            <div>{data.discountPercentage}</div>
            <div>{data.thumbnail}</div>
            <div>
              {data.images.map(image => (
                <div>{image}</div>
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  )
}
