import { useState, useEffect } from "react";

function UseFetch(url) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const abortFunction = new AbortController();

    useEffect(() => {
        fetch(url, { signal: abortFunction })
            .then((response) => {
                if (!response) {
                    throw new Error('could not reach resources')
                } else {
                    return response.json()
                }
            })
            .then((data) => {
                setData(data)
                setLoading(false)
                setError(null)
            })

        .catch((err) => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setError(err.message)
                setLoading(false)
            }
        })

        return () => {
            abortFunction.abort()
        }
    }, [url]);

    return { loading, data, error }
}
export default UseFetch;
