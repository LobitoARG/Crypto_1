import axios from 'axios'
import { useEffect, useState } from 'react'

export const Detalle = () =>{
    let query = new URLSearchParams(window.location.search)
    let cryptoID = query.get('id')

    const [detailCrypto, setDetail] = useState([])
    const [networkCrypto, setNetworkCrypto] = useState([])

    useEffect(()=>{
        const endpoint = `https://api.exchange.cryptomkt.com/api/3/public/currency/${cryptoID}`
        axios.get(endpoint)
        .then(response =>{
            let cryptoINF = response.data
            let cryptoNetworkArray = response.data.networks
            setDetail(cryptoINF)
            setNetworkCrypto(cryptoNetworkArray)
            //console.log(cryptoNetworkArray)
        })
        .catch(e =>{
            console.log(e)
        })

    },[cryptoID])

    return(
        <div className=''>
        <h1 className='text-4xl text-center'>Informacion principal</h1>
        
        {networkCrypto.length===0 && <h5>No se encontraron detalles del Network</h5>}
        <div className='border-4 border-solid'>
        <h1>Full Name: {detailCrypto.full_name}</h1>
        {
            networkCrypto.map((cryptoD, index) =>{
                return(
                    <ul key={index}>
                    <li>Network:{cryptoD.network}</li>
                    {cryptoD.protocol && <li>Protocolo:{cryptoD.protocol}</li>}
                    <li>{cryptoD.avg_processing_time}</li>
                    </ul>

                )
            })
        }

        </div>
        
        </div>
    )
}