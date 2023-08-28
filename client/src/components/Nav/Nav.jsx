import { Link } from "react-router-dom"


export const Nav = () => {

    return (

        <nav>
            <div>

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