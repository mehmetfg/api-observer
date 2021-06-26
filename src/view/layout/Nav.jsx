import {Link} from "react-router-dom";

export default function Nav() {

    return(
        <div>
            <nav className="navbar navbar-dark">
                <h3>Logo</h3>
                <ul>

                    <Link to="/">
                        <li>AnaSayfa</li></Link>
                    <Link to="/observer">
                        <li> Api Kontrol </li></Link>

                </ul>
            </nav>
        </div>

    )

}