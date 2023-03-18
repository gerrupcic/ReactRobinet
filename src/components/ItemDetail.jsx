import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem (item, quantity);
    }

    return(
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <img src={item.imagen} alt="Foto Producto" width={350}/>
                </div>
                <div className="col">
                    <h1>{item.nombre}</h1>
                    <p>{item.descripicion}</p>
                    <p><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;