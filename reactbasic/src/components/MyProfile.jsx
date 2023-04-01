//rfce คีย์ลัด
import React from 'react'

function MyProfile({ data }) {
  return (
    <div>
        <p>My name is {data.firstName} {data.lastName}</p>
        <img src={data.img} alt="" width="150" height="150"/>
        <p>{data.haha}</p>
    </div>
  )
}

export default MyProfile