// import function libraries
import Nav from "./Nav";
import Logo from "./Logo";

function Header(){
    return(
        <header className='bg-[#a5d6a7] text-[#212121]]'>
            <div className="flex justify-around items-center p-2">
                <div className="w-100%">
                <Logo/>
                </div>
                <div>
                <Nav/>
                </div>
            
            </div>
        
        </header>
    )
}

export default Header;