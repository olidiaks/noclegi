import {Link, useResolvedPath} from "react-router-dom";

const MyHotels = () => {
    const path = useResolvedPath('dodaj-nowy-hotel');

    return <div>
        <p>Nie ma jeszcze żadnego hotelu.</p>
        <Link to={path} className="btn btn-primary">Dodaj hotel</Link>
    </div>;
};

export default MyHotels;