
import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const sectionOneTitle = 'Pokemon Lists';

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then(res => {
              console.log(res);
              if(!res.ok){
                throw Error('Could not fetch the data');
              }
              return res.json();
            })
            .then(data => {
              setData(data);
              setIsPending(false);
              setError(null);
            })
            .catch( err => {
              console.log(err.message);
              setError(err.message);
              setIsPending(false);
            })
        }, 1000)
        }, [url])

    return{ data, isPending, error, sectionOneTitle}

}



export default useFetch;
