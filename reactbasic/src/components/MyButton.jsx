//rfce คีย์ลัด
import React from 'react'

function MyButton() {

  function handleClick(){
    alert("You click me");
  }


  return (
    <button onClick={handleClick}>MyButton</button>
  )
}

export default MyButton