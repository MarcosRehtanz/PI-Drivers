import { Link } from "react-router-dom"
import { SearchBar } from "../SearchBar/SearchBar"


export const Nav = () => {

    return (

        <nav>
            <div>
                <Link to='/'>
                    <img src="/F1.svg" alt="" />
                </Link>

                <SearchBar/>

                <ul>
                    <Link to='/home'>
                        <li>Home</li>
                    </Link>
                    <Link to='/form'>
                        <li>Form</li>
                    </Link>
                </ul>

            </div>
        </nav>

    )

}