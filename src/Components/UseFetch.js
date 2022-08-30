import { useState, useEffect } from "react";
import db from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";

//This is how you use the read the database from firestore
function UseFetch(collectionName) {

    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, collectionName), (snapshot) => {
            setData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id })));
            setIsPending(false)
        })
    }, [collectionName]);

    return { isPending, data };
}

export default UseFetch;