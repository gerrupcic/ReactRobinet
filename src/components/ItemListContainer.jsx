import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {getDocs, collection, getFirestore, query, where} from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const{id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
        });
    }, [id]);



    return(
        <div className="container my-5">
                <ItemList items={items}/>
                <ItemCount stock={10}/>
            </div>
    )
}

export default ItemListContainer;