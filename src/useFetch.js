
import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = () => {

    const [data, setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [networkError, setNetworkError] = useState(null);
    const sectionOneTitle = 'Pokemon Lists';

    useEffect(()=>{
        fetch('http://localhost:3000/blogs')
        .then(res =>{
            if(!res.ok){
                throw Error('Could not fetch the date for that resources')
            }
            return res.json();
        }) 
        .then((data)=>{
            setData(data);
            setIsPending(false);
            setNetworkError(null);
        })
        .catch( e => {
            setNetworkError(e.message)
            setIsPending(false);
        })
    },[]);
}

export default useFetch