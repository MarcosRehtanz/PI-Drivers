import { Link, useLocation } from "react-router-dom"
import { SearchBar } from "../SearchBar/SearchBar"
import './Nav.css'

export const Nav = () => {
    const location = useLocation().pathname

    return (

        <nav>
            <div id="Nav-container" >
                <Link to='/home' >
                    {location === '/home' || location === '/'
                        ? <img id="image-logo" src="/F1.svg" alt="logo" />
                        : <button id="back-button">HOME</button>
                    }
                </Link>

                {location === '/home'
                    ? <SearchBar />
                    : <h1 id="name-location">{location.split('/')[1].toUpperCase()}</h1>
                }

                <ul id="NavBar-contain">
                    {location === '/home'
                        && <Link to='/form' className="navigate-item">
                            <li id="Nav-add-driver">+ Enroll</li>
                        </Link>
                    }
                    <Link to='/' className="navigate-item">
                        <li >Exit</li>
                    </Link>
                </ul>

            </div>
        </nav>

    )

}