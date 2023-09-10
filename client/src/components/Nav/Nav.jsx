import { Link, useLocation } from "react-router-dom"
import { SearchBar } from "../SearchBar/SearchBar"
import './Nav.css'

export const Nav = () => {
    const location = useLocation().pathname

    return (

        <nav>
            <div id="Nav-container" >
                <Link to='/' id="">
                    <img src="/F1.svg" alt="logo" />
                </Link>

                <SearchBar />

                <ul id="NavBar-contain">
                    {location === '/home'
                        && <Link to='/form' className="navigate-item">
                            <li id="Nav-add-driver">+ Enroll</li>
                        </Link>
                    }
                    <li className="navigate-item">Exit</li>
                </ul>

            </div>
        </nav>

    )

}