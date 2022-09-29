import axios from 'axios'
import { useEffect, useState } from 'react'


export const Detalle = () =>{
    let query = new URLSearchParams(window.location.search)
    let cryptoID = query.get('id')

    const [detailCrypto, setDetail] = useState({})
  
    

    useEffect(()=>{
        
        const endpoint = `https://api.coingecko.com/api/v3/coins/${cryptoID}`
        axios.get(endpoint)
        .then(response =>{
            let cryptoINF = response.data
            setDetail(cryptoINF)
            
        })
        .catch(e =>{
            console.log(e)
        })

    },[])

    return(
        
        <div>
        <h1 className='text-4xl text-center'>Informacion principal</h1>
        {!detailCrypto && <h1 className='text-4xl text-center'>Loading...</h1>}
        <img src={detailCrypto?.image?.small} alt='logo' className='m-auto w-[5vw]'/>
        <div>
        <div className='flex flex-col flex-wrap text-center justify-around shadow-lg shadow-blue-500/50 mt-5'>
                <h1>{detailCrypto.symbol}</h1>
                <h1>Name: {detailCrypto.name}</h1>
                <h1>Category: {detailCrypto.categories}</h1>
                {/* <p>Description:{detailCrypto?.description?.en}</p> */}
                <p>Homepage: {detailCrypto?.links?.homepage}</p>
                <p>Ranking in Market: {detailCrypto.market_cap_rank}</p>
                <ul>
                    <p>Current Price:</p>
                    <li>USD:$ {detailCrypto?.market_data?.current_price?.usd}</li>
                    <li>EUR:$ {detailCrypto?.market_data?.current_price?.eur}</li>
                    <li>ETH: {detailCrypto?.market_data?.current_price?.eth}</li>
                    <li>ARS:$ {detailCrypto?.market_data?.current_price?.ars}</li>
                </ul>
            </div>
        </div>
            
        </div>
    )
}