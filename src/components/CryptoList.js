import axios from 'axios';
import { useEffect, useState } from 'react';

function CryptoList(){

    useEffect(()=>{

        const endpoint = 'https://api.exchange.cryptomkt.com/api/3/public/currency';
        console.log(endpoint)
        axios.get(endpoint)
        
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])


    return(
        <>
        <h1>CryptoList</h1>
        </>
    )
}

export default CryptoList;