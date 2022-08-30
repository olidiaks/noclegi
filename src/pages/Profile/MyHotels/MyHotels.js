import {Link, useResolvedPath} from "react-router-dom";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";
import {useContext, useEffect, useState} from "react";
import {firebaseFetchHotels} from "../../../hooks/Firebase/firebaseFetchHotels";
import useAuth from "../../../hooks/useAuth";
import instance from "../../../axios";
import ThemeContext from "../../../context/themeContext";
import LoadingIcon from "../../../components/UI/LoadingIcon/LoadingIcon";

const MyHotels = () => {
    useWebsiteTitle("Moje hotele. | Noclegi");

    const path = useResolvedPath('dodaj-nowy-hotel');

    const {color} = useContext(ThemeContext);

    const [loading, setLoading] = useState(true);
    const [auth] = useAuth();
    const [hotels, setHotels] = useState([]);
    const fetchHotel = async () => {
        setHotels((await firebaseFetchHotels()).filter(hotel => hotel.idUser == auth.userId));
        setLoading(false);
    }
    useEffect(() => {
        fetchHotel();
    }, [])

    async function deleteHandler(id) {
        try {
            await instance.delete(`/hotels/${id}.json`);
            setHotels(hotels.filter(hotel => hotel.id !== id));
        } catch (e) {
            console.log(e.response);
            throw Error(e.response);
        }
    }

    return <div>
        {loading ? <LoadingIcon/> :
            (
                <>
                    {hotels ? (
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <td>Nazwa</td>
                                <td>Status</td>
                                <td>Opcje</td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                hotels.map(hotel =>
                                    <tr key={hotel.id}>
                                        <td>{hotel.name}</td>
                                        <td>{hotel.status}</td>
                                        <td>
                                            <Link to={`/profil/hotele/edytuj/${hotel.id}`}
                                                  className="btn btn-warning">Edytuj</Link>
                                            <button onClick={() => deleteHandler(hotel.id)}
                                                    className="ms-2 btn btn-danger">Usuń
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    ) : <p>Nie ma jeszcze żadnego hotelu.</p>}
                    <Link to={path} className={`btn btn-${color}`}>Dodaj hotel</Link>
                </>
            )
        }
    </div>;
};

export default MyHotels;