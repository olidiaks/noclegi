import {Link, useResolvedPath} from "react-router-dom";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";
import {useEffect, useState} from "react";
import {firebaseFetchHotels} from "../../../hooks/Firebase/firebaseFetchHotels";
import useAuth from "../../../hooks/useAuth";

const MyHotels = () => {
    useWebsiteTitle("Moje hotele. | Noclegi");

    const path = useResolvedPath('dodaj-nowy-hotel');

    const [auth] = useAuth();
    const [hotels, setHotels] = useState([]);
    const fetchHotel = async () => {
        setHotels((await firebaseFetchHotels()).filter(hotel => hotel.idUser == auth.userId));
    }
    useEffect(() => {
        fetchHotel();
    }, [])

    return <div>
        {hotels ? (
            <table className="table table-striped">
                <thead>
                <tr>
                    <td>Nazwa</td>
                    <td>Opcje</td>
                </tr>
                </thead>
                <tbody>
                {
                    hotels.map(hotel =>
                        <tr key={hotel.id}>
                            <td>{hotel.name}</td>
                            <td>
                                <button className="btn btn-warning">Edytuj</button>
                                <button className="ms-2 btn btn-danger">Usuń</button>
                            </td>
                        </tr>)
                }
                </tbody>
            </table>
        ) : <p>Nie ma jeszcze żadnego hotelu.</p>}
        <Link to={path} className="btn btn-primary">Dodaj hotel</Link>
    </div>;
};

export default MyHotels;