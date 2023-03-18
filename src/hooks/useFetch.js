import { useEffect, useState } from "react";

async function useFetch(url, buttonState) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData(url) {
            const response = await fetch(url);
            return await response.json();
        }
        fetchData(url).then(responseData => {
            setData(responseData)
        });
    }, []);
    return [data];
};

export default useFetch;