const ItemListContainer = (prop) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{prop.mensaje}</h1>
                </div>
            </div>
        </div>
        
    )
}

export default ItemListContainer;