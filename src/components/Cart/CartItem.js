
import React from 'react'

export default function CartItem({item,value}) {
 const {id,title,img,price,total,count} =item
 const{incrementation,decrementation,removeItem}=value;
  return (
   <>
    <div className="row my-2 text-capitalize text-center">
     <div className="col-10 mx-auto col-lg-2">
      <img src={img} alt="product" style={{width:'5rem',heigth:'5rem'}} className='img-fluid' />
     </div>
     <div className="col-10 mx-auto col-lg-2">
      <span className='d-lg-none'>product:</span>{title}
     </div>
     <div className="col-10 mx-auto col-lg-2">
      <span className='d-lg-none'>price:</span>$ {price}
     </div>
     <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
      <div className="d-flex justify-content-center">
       <div>
        <span className="btn btn-black mx-1" onClick={()=>incrementation(id)}>
         <i className="fas fa-caret-up icon"></i>
        </span>
        <span className="btn btn-black mx-1 p-1">{count}
        </span>
        <span className="btn btn-black mx-1" onClick={()=>decrementation(id)}>
         <i className="fas fa-caret-down icon"></i> 
        </span>
       </div>
      </div>
     </div>
     {/*  */}
     <div className="col-10 mx-auto col-lg-2">
      <div className="cart-item"  onClick={()=>removeItem(id)}>
       <i className="fas fa-trash"></i>
      </div>
      
     </div>
     <div className="col-10 mx-auto col-lg-2">
      <strong>Item Total : $  {total}</strong>
      
     </div>
     </div>
    </>
    
  )
}
