import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <img src={item.imagen} alt="Foto Producto"/>
                </div>
                <div className="col">
                    <h1>{item.nombre}</h1>
                    <p>{item.descripicion}</p>
                    <p><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;