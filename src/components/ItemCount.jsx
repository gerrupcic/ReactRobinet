import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemsStock] = useState (stock);
    const [itemAdded, setItemAdded] = useState (false);


    const incrementarStock = () => {
        if (items < itemStock){
            setItems (items + 1) ;
        }
        
    }
    const restarStock = () => {
        if (items > 1){
            setItems (items - 1) ;
        }
        
    }
    const addToCart = () => {
        if (itemStock >= items){
            setItemsStock (itemStock - items);
            setItems(1);
            console.log ("Agregaste " + items + " productos al carrito");
            setItemAdded(true);
            onAdd (items);
        }
        
    }

    useEffect(() => {
        setItemsStock(stock);
    }, [stock]);


    return (
        <div className="div">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={restarStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{items}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-outline-primary">Terminar Mi Compra</Link>: 
                    <button className="btn btn-outline-primary" onClick={addToCart}>Agregar al Carrito</button> }
                </div>
            </div>
        </div>
    )
}

export default ItemCount;