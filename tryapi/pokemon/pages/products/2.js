import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Postmethod() {
  const [products, setProducts] = useState()

  function onsubmit(data) {
    axios.post('https://dummyjson.com/products/add', data).then(response => {
      setProducts(response.data)
      console.log(response.data, 'response.data')
    })
    console.log(data, 'data')
  }

  return (
    <>
      <button
        onClick={() => onsubmit({ title: 'BABA', brand: 'Ipgone' })}
        style={{ width: '200px', height: '200px', border: 'red' }}
      >
        Button
      </button>
      {products ? (
        <>
          {' '}
          {products.title} + {products.brand}{' '}
        </>
      ) : (
        ''
      )}
    </>
  )
}
export default Postmethod



