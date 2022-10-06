import { Link } from 'react-router-dom'
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi'

function Links() {
    return (
      <>
        <Link className="block pr-2" to={"/"}>
          <p >Home</p>
        </Link>
        <Link className="block pr-2" to={"/list"}>
          <p>Crypto List</p>
        </Link>
        <Link className="block pr-2" to={"/list"}>
          <p>Crypto Prices</p>
        </Link>
        <Link className="block pr-2" to={"/list"}>
          <p>Crypto Books</p>
        </Link>
      </>
    );
}

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    return (
      <nav>
        <div className="hidden sm:flex">
          <Links />
        </div>
        <div className="sm:hidden relative">
          <div className="text-white">
            <button className="btn-icon" onClick={() => setShowMenu(!showMenu)}>
              <FiMenu />
            </button>
          </div>
          {showMenu && (
            <div className="absolute top-10 right-0 z-50 bg-black shadow-xl rounded p-2">
              <Links />
            </div>
          )}
        </div>
      </nav>
    );
  }