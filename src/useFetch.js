
import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const sectionOneTitle = 'Pokemon Lists';

    useEffect(()=>{

        const abortCont = new AbortController();

        fetch(url, abortCont.signal)
        .then(res =>{
            if(!res.ok){
                throw Error('Could not fetch the data for that resources')
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

        return () => abortCont.abort();
    },[url]);
    
   

    return{ data, isPending, error, sectionOneTitle}

}



export default useFetch;
