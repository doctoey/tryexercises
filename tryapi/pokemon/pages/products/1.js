import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function ById() {
  const [products, setProducts] = useState()

  useEffect(() => {
    axios.get('https://dummyjson.com/products/1').then(response => {
      setProducts(response.data)
    })
  }, [])
  console.log(products, '===Products===')

  return (
    <>
      <div>{products.brand}</div>

      <div>ById</div>
    </>
  )
}

export default ById


