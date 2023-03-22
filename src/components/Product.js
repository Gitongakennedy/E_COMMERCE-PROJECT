import React, { Component } from 'react'
import Styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'

export default class Product extends Component { 
  render() {
    const {id,img,title,price,inCart}=this.props.product
    return (
      <ProductWrapper classname='col-9 mx-auto  col-md-6 col-lg-3 my-3'>
       <div className="card">
        <ProductConsumer>
{(value)=>(
 <div className="img-container p-5" onClick={()=>
 value.handleDetail(id)
 }>
           <Link to='/details'>
            <img src={img} alt={title} className='card-img-top'/>
           </Link>
           <button className='cart-btn' disabled={inCart?true:false} onClick={()=>{value.addToCart(id)
          value.openModal(id)
          }}>
            {inCart?(<p className='text-capitalize mb-0' disabled>in cart</p>):(<i className='fas fa-cart-plus'/>)}
           </button>
        </div>
)}
       
        </ProductConsumer>
        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-cente mb-0">
            {title}
          </p>
          <h5 className='text-blue font-italic mb-0'>
            <span className='mr-1'>$</span>
            {price}
          </h5>
        </div>
       </div>
      </ProductWrapper>
    )
  }
}

Product.propTypes={
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired 
}



const ProductWrapper=Styled.section`
.card{
  border-color:transparent;
  transition:all 1s linear;
  margin:2rem 1rem;
}
.card-footer{
  background:transparent;
  border-top:transparent;
  transition:all 0.3s linear;
}
&:hover{
  .card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 5px 0px;
    z-index:1;
  }
  .card-footer{
    background:rgba(247,247,247);
  }
}
.img-container{
  position:relative;
  overflow:hidden;
}
.card-img-top{
  transition:all 1s linear;
}
.img-container:hover .card-img-top{
transform:scale(1.2);
}
.cart-btn{
  position:absolute;
  bottom:1rem;
  right:0;
  padding:0.2rem 0.4rem;
  background:var(--lightBlue);
  color:var(--mainWhite);
  border-radius:0.5rem 0 0 0;
  font-size:1.4rem;
  border:none;
  opacity:0;
  transition:all 1s linear;
}
.img-container:hover .cart-btn{
  opacity:1;
}
.cart-btn:hover{
  color:var(--mainBlue);
  cursor:pointer;
}
`
