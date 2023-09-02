import { Link } from "react-router-dom"
import { SearchBar } from "../SearchBar/SearchBar"
import './Nav.css'

export const Nav = () => {

    return (

        <nav>
            <div id="Nav-container" >
                <Link to='/' id="">
                    <img src="/F1.svg" alt="logo" />
                </Link>

                <SearchBar/>

                <ul id="NavBar-contain">
                    <Link to='/home' className="navigate-item">
                        <li>Home</li>
                    </Link>
                    <Link to='/form' className="navigate-item">
                        <li>Form</li>
                    </Link>
                </ul>

            </div>
        </nav>

    )

}