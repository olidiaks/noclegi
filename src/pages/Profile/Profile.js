import { useContext } from "react";
import {Link, Outlet, useResolvedPath} from "react-router-dom";
import ThemeContext from "../../context/themeContext";

const Profile = () => {
    const details = useResolvedPath("szczegoly");
    const myHotels = useResolvedPath("mojeHotele");
    const theme = useContext(ThemeContext).color;


    return (<div className="card">
        <div className="card-header">
            <h2>Mój profil</h2>
        </div>
        <div className="card-body">
            <nav className="navbar">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to={details} className={`nav-link  text-${theme}`}>Profil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={myHotels} className={`nav-link  text-${theme}`}>Hotele</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    </div>);
};

export default Profile;
