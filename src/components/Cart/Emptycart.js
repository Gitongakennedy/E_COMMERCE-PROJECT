import React from 'react'
import {ButtonContainer} from '../../Button'
import {Link} from 'react-router-dom'

const Emptycart = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
       <div className="col-10 mx-auto text-center text-title">
        <h1>Your Cart is currently empty</h1>
        <Link to='/'>
        <ButtonContainer>
         Add Items
        </ButtonContainer>
        </Link>
       </div>
      </div>
    </div>
  )
}

export default Emptycart
