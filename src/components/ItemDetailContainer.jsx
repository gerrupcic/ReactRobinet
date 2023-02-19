import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import arrayProductos from "./json/productos.json";




const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});
    const {index} = useParams ();
    useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout (()=> {
                resolve(arrayProductos.find(prod => prod.index === parseInt(index)));
            },2000);
        });
        promesa.then((respuesta) =>{
            setItem(respuesta);
        })
    }, [index]);
    return(

      <ItemDetail item={item}/>

    )
}

export default ItemDetailContainer;