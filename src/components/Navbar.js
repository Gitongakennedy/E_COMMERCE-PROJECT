import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'



export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
      <Link to='/'>
      <i className="fas fa-phone"></i>
      </Link>
      <ul className="navbar-nav align-items-center nl-5">
        <li className="nav-item">
          <Link to='/' className='nav-link'>Products</Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
       <ButtonContainer>
        <span className='mr-5'>
        <i className="fas fa-cart-plus">Your cart</i>
        </span>
       </ButtonContainer>
      </Link>
      </NavWrapper>
    )
  }
}

const ButtonContainer=styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.1rem solid var(--lightBlue);
color:var(--lightBlue);
border-radius:0.5rem;
padding:0.2rem 0.5rem; 
cursor:pointer;
margin:0 1rem 0 2rem;
transition:all 0.5s ease-in-out;
&:hover{
  background-color:var(--lightBlue);
  color:var(--mainBlue);
}
&:focus{
  outline:none;
}

`
const NavWrapper=styled.nav`
background-color:var(--mainBlue);
display:flex;
justify-content:space-between;
.nav-link{
  color:var(--mainWhite) !important;
  margin:0 2rem;
  font-size:1.3rem;
  text-transform:capitalize;
}
`
