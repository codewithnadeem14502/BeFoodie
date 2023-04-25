import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1>Opps </h1>
      <p> some thing went worng </p>
      <h2>{err.status +" : "+err.statusText}</h2>
    </div>
  )
}

export default Error
