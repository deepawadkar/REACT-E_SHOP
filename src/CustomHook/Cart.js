import { useContext } from "react"
import { CartContext } from "../Context/CartContext"


//useCart => custom hook represents the cartContext\
const useCart = () => {
    return useContext(CartContext)
}

export default useCart;