import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function CryptoList(){

    const [cryptoArray, setCryptoArray] = useState([]);

    useEffect(()=>{

        const endpoint = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=52&page=1';
        axios.get(endpoint)
        .then(response=>{
            const apiDATA = response.data
            console.log(apiDATA)
            setCryptoArray(apiDATA)
        })
        .catch(error=>{
            console.log(error)
        })
        

    },[])

    return(
        <div className='container mx-auto'>
        {cryptoArray.length===0 && <h5>Loading..</h5>}
        <h1 className='text-3xl text-center'>Crypto List</h1>
        <div className='flex flex-row flex-wrap justify-around'>
            {
                cryptoArray.map((oneCrypto,index)=>{
                    return(
                        <ul key={index} className='border-2 border-gray-500 hover:border-blue-400 hover:bg-blue-100/50 mt-4 mr-4 w-[20vw]'>
                            <Link to={`/detail?id=${oneCrypto.id}`}><li className="text-2xl text-center hover:cursor-default">{oneCrypto.name}</li></Link> 
                        </ul>
                        
                    )
                })                
            }
        </div>
        </div>
    )
}

export default CryptoList;