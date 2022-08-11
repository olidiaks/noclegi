import {Link, Outlet, useResolvedPath} from "react-router-dom";

const Profile = () => {
    const details = useResolvedPath("szczegoly");
    const myHotels = useResolvedPath("mojeHotele");


    return (<div className="card">
        <div className="card-header">
            <h2>Mój profil</h2>
        </div>
        <div className="card-body">
            <nav className="navbar">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to={details} className="nav-link">Profil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={myHotels} className="nav-link">Hotele</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    </div>);
};

export default Profile;