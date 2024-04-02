import React, { createContext, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

// context instance
export const CartContext = createContext()

function CartProvider(props) {
    const [cart,setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart")
        return storedCart ? JSON.parse(storedCart): []
    })
    // memorized value of state
    const cartData = useMemo(()=> ({
        cart
    }), [cart])

    // read data

    useEffect(() => {
                
    },[cart])

    // add to cart
     const addToCart = (product) => {
        // console.log('cart',product)
        // store the data in localstorage
      let storedCart = JSON.parse(localStorage.getItem("cart")) || []
      let extItem = storedCart.find(item => item.id === product.id)
      console.log(`extItem =`, extItem)
        if(extItem) {
            toast.warning("Product already in cart")
        } else {
            let cartItem = {
                ...product,
                quantity: 1
            }
            storedCart.push(cartItem)
            localStorage.setItem("cart", JSON.stringify(storedCart))
            toast.success("Product added to Cart")
            window.location.reload()
        }
     }

    // remove item from cart
    const removeCart = (id) => {
        // console.log(`id =`, id)

        // read cart data
        let storedCart = JSON.parse(localStorage.getItem("cart")) || []
        // find the index of cart
        let cartIndex = storedCart.findIndex(item => item.id === id)
        //  console.log(`cartIndex =`,cartIndex)

        // to remove item from cart
        storedCart.splice(cartIndex,1)

        // store after delete
        localStorage.setItem("cart", JSON.stringify(storedCart))
        setCart(storedCart)
        toast.success("Product deleted from cart")

    }

    // clear cart
    const clearCart = () => {
        if(window.confirm(`Are you sure want to Clear complete Cart?`)){
        localStorage.removeItem("cart")
        toast.success("Cart Cleared successfully")
        window.location.reload()
         }
        }

    // increment cart item quantity
    const incr = (id) => {
        //read cart data
        let storedCart = JSON.parse(localStorage.getItem("cart")) || []

        let cartItem = storedCart.find(item => item.id === id)

        if(cartItem){
            let newCart = storedCart.map(item => {
                if(item.id === id) {
                    return {...item, quantity:item.quantity + 1}
                }
                else {
                    return item
                } 
            })
            localStorage.setItem("cart", JSON.stringify(newCart))
            window.location.reload()
        }
        
        //  console.log(`cartIndex =`,cartIndex)
    }

    // decrement cart item quantity
    const decr = (id) => {
        //read cart data
        let storedCart = JSON.parse(localStorage.getItem("cart")) || []

        let cartItem = storedCart.find(item => item.id === id)

        if(cartItem){
            let newCart = storedCart.map(item => {
                if(item.id === id) {
                    if(item.quantity < 1) {
                        return {...item, quantity: 1}
                    }else{
                        return {...item, quantity:item.quantity - 1}
                    }
                }
                else {
                    return item
                } 
            })
            localStorage.setItem("cart", JSON.stringify(newCart))
            window.location.reload()
        }
        if(cartItem.quantity <= 1) {
            removeCart(id)
        }
        // if(cartItem.quantity < 1) {
        //     alert('Quantity cannot be less than one')
        // }
    }
    

  return (
    <CartContext.Provider value={{ cartData, addToCart, removeCart, clearCart, incr, decr }} >
        {
            props.children
        }
    </CartContext.Provider>
  )
}

export default CartProvider