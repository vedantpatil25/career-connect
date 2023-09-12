import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
        <h2>page not found</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam architecto dolorem accusantium aut molestias asperiores, aspernatur autem dignissimos voluptatum ipsa animi, eaque vero doloremque sequi optio voluptas cupiditate, nulla assumenda? Ea delectus unde dolores temporibus, molestiae officiis tenetur possimus quod reiciendis dignissimos quaerat officia ipsam cupiditate commodi quas? Minus.</p>
        <h2>Go to Home Page : <Link to="/">HomePage</Link></h2>
    </div>
  )
}

export default NotFound