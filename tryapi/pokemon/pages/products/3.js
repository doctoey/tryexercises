import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

function DeleteMethod() {
  const [products, setProducts] = useState()
  const routes = useRouter()
  useEffect(() => {
    const id = 1
    console.log(id, 'id')
    axios
      .delete(`https://dummyjson.com/products/${id}`)
      .then(response => {
        alert('Deleteeeeee Ja')
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <>
      <div>DeleteMethod</div>
    </>
  )
}

export default DeleteMethod



