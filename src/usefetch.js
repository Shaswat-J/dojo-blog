import { useState ,useEffect} from "react";

const useFetch=(url) => {
    const[data,setdata]=useState(null);
    const[ispending,setispending]=useState(true);
    const[error,seterror]=useState(null);

    useEffect(() => {
        setTimeout(() => {
            
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data=> {
                setdata(data);
                setispending(false);
                seterror(null);
            }
            ).catch(err => {
                setispending(false);
                seterror(err.message);
            }
            );
        },1000);
    }, [url]);    

    return {data,ispending,error};
}

export default useFetch;