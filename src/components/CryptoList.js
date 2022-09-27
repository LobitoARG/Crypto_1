import axios from 'axios';
import { useEffect, useState } from 'react';

function CryptoList(){

    const [cryptoArray, setCrypto] = useState([]);

    useEffect(()=>{

        const endpoint = 'https://api.exchange.cryptomkt.com/api/3/public/currency';
        axios.get(endpoint)
        .then(response=>{
            setCrypto(response.data)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])

    console.log(cryptoArray)

    return(
        <>
        
        {
            cryptoArray.map((oneCrypto, index)=>{
                return(
                    <h2 key={index}>{oneCrypto.full_name}</h2>
                )
            })
        }
        </>
    )
}

export default CryptoList;