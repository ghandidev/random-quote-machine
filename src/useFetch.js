import { useState, useEffect } from "react";

export const url = `https://api.api-ninjas.com/v1/quotes`;

export function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)


    useEffect(() => {
        setLoading(true);
        fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'wpkxSLCvK9DTeqjarF9w2g==2MoxOE7rb8n8sp4m'
            }
        })
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))

    }, [url]);

    const handleNewQuote = () => {
        fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'wpkxSLCvK9DTeqjarF9w2g==2MoxOE7rb8n8sp4m'
            }
        })
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(error => {
                console.error('Error fetching quote', error)
            })
            .finally(() => setLoading(false))
    }

    return { data, loading, error, handleNewQuote };
}
