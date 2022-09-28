import axios from 'axios'
import { useEffect, useState } from 'react'

export const Detalle = () =>{
    let query = new URLSearchParams(window.location.search)
    let cryptoID = query.get('id')

    const [detailCrypto, setDetail] = useState([])
    

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

    },[cryptoID])
    
    
    console.log(detailCrypto)

    return(
        
        <div className=''>
        {detailCrypto.length===0 && <h5>No se encontraron detalles</h5>}
        <h1 className='text-4xl text-center'>Informacion principal</h1>
        <img src={detailCrypto.image.small} alt='logo'/>
        <div className='border-4 border-solid'>
        <h1>Nombre: {detailCrypto.name}</h1>
        <h1>Symbol: {detailCrypto.symbol}</h1>
        <h1>Categoria: {detailCrypto.categories}</h1>
        <p>Descripcion:{detailCrypto.description.en}</p>
        <p>Homepage: {detailCrypto.links.homepage}</p>
        <p>Ranking en el mercado: {detailCrypto.market_cap_rank}</p>
        <ul>
            <p>Current Price:</p>
            <li>USD: {detailCrypto.market_data.current_price.usd}</li>
            <li>EUR: {detailCrypto.market_data.current_price.eur}</li>
            <li>ETH: {detailCrypto.market_data.current_price.eth}</li>
            <li>ARS: {detailCrypto.market_data.current_price.ars}</li>
        </ul>
        </div>
        </div>
    )
}