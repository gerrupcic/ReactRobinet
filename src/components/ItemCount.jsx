import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemsStock] = useState (stock);


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
    const onAdd = () => {
        if (itemStock >= items){
            setItemsStock (itemStock - items);
            setItems(1);
            console.log ("Agregaste " + items + " productos al carrito");
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
                    <button className="btn btn-outline-primary" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;