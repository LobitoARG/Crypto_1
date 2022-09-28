import axios from 'axios'
import { useEffect, useState } from 'react'


function CryptoList(){

    const [cryptoArray, setCrypto] = useState([]);

    useEffect(()=>{

        const endpoint = 'https://api.exchange.cryptomkt.com/api/3/public/currency';
        axios.get(endpoint)
        .then(response=>{
            const apiDATA = response.data
            const apiResult = apiDATA
            const nuevoArray = Object.keys(apiResult)
            console.log(nuevoArray)
            setCrypto(nuevoArray)
        })
        .catch(error=>{
            console.log(error)
        })
        

    },[])

    //console.log(cryptoArray)

    return(
        <>
        <div>
            {
                cryptoArray.map((oneCrypto,index)=>{
                    return(
                        <h1 key={index} className="text-2xl">{oneCrypto}</h1>
                    )
                })                
            }
            
        
        </div>
        
        
        </>
    )
}

export default CryptoList;