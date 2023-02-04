import carrito from "./images/cart-check.svg";

const CartWidget = () =>{
    return(
        <button type="button" className="btn btn-primary position-relative">
        <img src={carrito} alt={"carrito"} width={24}></img>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-flex align-items-center justify-content-end">1</span>
      </button>
    )
}

export default CartWidget;