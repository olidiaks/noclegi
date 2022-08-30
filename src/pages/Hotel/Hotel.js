import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import styles from "../../components/Hotels/Hotel/Hotel.module.css";
import hotelImg from "../../assets/images/hotel.jpg";
import AuthContext from "../../context/authContext";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import {LoginButton} from "../../components/UI/LoginButton/LoginButton";
import {firebaseFetchHotels} from "../../hooks/Firebase/firebaseFetchHotels";

const propTypes = {
    backendHotels: PropTypes.array.isRequired,
};

const Hotel = props => {
    const auth = useContext(AuthContext).user;
    const {id} = useParams();
    const [hotel, setHotel] = useState({});
    const [loading, setLoading] = useState(true);
    const setTile = useWebsiteTitle();

    const fetchHotel = async () => {
        setHotel(await firebaseFetchHotels(id));
        setTile(`Hotel - ${hotel.name} | Noclegi`);
        setLoading(false);
    };

    useEffect(() => {
        fetchHotel()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return loading ? <LoadingIcon/> : (
        <div className={`card`}>
            <div className="card-body">

                <div className="row">
                    <div className="col-4">
                        <img
                            src={hotelImg}
                            alt=""
                            className="img-fluid img-thumbnail"/>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <p className={styles.title}>{hotel.name}</p>
                                <span className="badge badge-light text-black">{hotel.city}</span>
                            </div>
                            <div className="col text-end">
                                <h5>Ocena: {hotel.rating ?? 0}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <p className={styles.description}>
                            {hotel.description}
                        </p>
                        {auth ? <p className="mt-2">Dostępne 4 pokoje.</p> :
                            <LoginButton>Dostępność: zaloguj się.</LoginButton>}
                    </div>
                </div>

            </div>
        </div>
    );
};

Hotel.propType = propTypes;

export default Hotel;