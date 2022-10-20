
import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const sectionOneTitle = 'Pokemon Lists';

    useEffect(()=>{
        fetch(url)
        .then(res =>{
            if(!res.ok){
                throw Error('Could not fetch the date for that resources')
            }
            return res.json();
        }) 
        .then((data)=>{
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch( e => {
            setError(e.message)
            setIsPending(false);
        })
    },[url]);

    return{ data, isPending, error, sectionOneTitle}

}



export default useFetch;
