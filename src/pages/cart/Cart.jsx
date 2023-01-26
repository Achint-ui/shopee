import React, { useContext } from 'react'
import {PRODUCTS} from "../../products"
import { ShopContext } from '../../context/Shop-context'
import CartItem from './CartItem'
import './Cart.css'
import {Link} from 'react-router-dom'

function Cart() {

  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
              if(cartItems[product.id]!==0){
                return <CartItem data={product} />
              }
        })}
      </div>
      {totalAmount > 0 ?
      <div className='checkout'>
        
        <p>Subtotal: ${totalAmount}</p>
        <Link to="/"><button>Continue Shopping</button></Link>
        
        <button>Checkout</button>
      </div>
      : <h1>Your cart is empty</h1>}
    </div>
  )
}

export default Cart