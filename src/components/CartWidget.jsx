import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import carrito from "./images/cart-check.svg";

const CartWidget = () =>{

const {cartTotal} = useContext(CartContext);

    return (cartTotal() > 0) ? 
        <Link to= {"/cart"} className="btn btn-primary position-relative">
        <img src={carrito} alt={"carrito"} width={24}></img>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-flex align-items-center justify-content-end">{cartTotal()}</span>
      </Link> : "";
    
}

export default CartWidget;