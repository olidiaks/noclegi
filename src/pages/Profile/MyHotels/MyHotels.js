import {Link, useResolvedPath} from "react-router-dom";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const MyHotels = () => {
    useWebsiteTitle("Moje hotele. | Noclegi");

    const path = useResolvedPath('dodaj-nowy-hotel');

    return <div>
        <p>Nie ma jeszcze żadnego hotelu.</p>
        <Link to={path} className="btn btn-primary">Dodaj hotel</Link>
    </div>;
};

export default MyHotels;