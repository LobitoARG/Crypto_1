import { Link } from 'react-router-dom'
import logo from '../img/lobo.png'

export default function Logo(){
    return(
        <>
        <Link to='/'>
        <img src={logo} alt='logo' className='w-[5rem]' />
        </Link>
        </>
    )
}