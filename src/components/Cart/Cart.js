import React, { Component } from 'react'
import {ProductConsumer} from '../../context'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './Emptycart'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
         {value=>{
const {cart} =value;
         
          if(cart.length>0){
            return(
              <>
              <Title name='Your' title='Cart' />
              <CartColumns />
              <CartList value={value} />
              <CartTotals value={value} />
              </>
            )
          }
          else{
            return(
              <EmptyCart />
            )
          }
         }}
        </ProductConsumer>
      </section>
    )
  }
}
