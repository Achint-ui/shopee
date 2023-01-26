import React, {useContext} from 'react'
import { ShopContext } from '../context/Shop-context'
function Product(props) {

    const {addToCart, cartItems} = useContext(ShopContext)

    return (
        <div className='product'>
            
            <img src={props.productImage} />
            <div className='description'>
                <p><b>{props.productName}</b></p>
                <p>${props.price}</p>
            </div>
            <button 
            className='addToCartBttn'
            onClick={()=>addToCart(props.id)}
            >
                Add to cart {cartItems[props.id]>0 && <>({cartItems[props.id]})</>}
            
            </button>
        </div>
    )
}

export default Product