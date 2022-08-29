import { useState, useEffect } from "react";
import db from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";

function UseConditions() {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "Conditions"), (snapshot) =>
            setData(snapshot.docs.map((doc) => ({...doc.data(), i: doc.id })))
        );
    }, []);

    console.log(data);
    return { loading, data, error };
}


export default UseConditions;