import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import styles from "../../components/Hotels/Hotel/Hotel.module.css";
import hotelImg from "../../assets/images/hotel.jpg";
import AuthContext from "../../context/authContext";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const propTypes = {
    backendHotels: PropTypes.array.isRequired,
};

const Hotel = props => {
    const auth = useContext(AuthContext);
    const {id} = useParams();
    const [hotel, setHotel] = useState({});
    const [loading, setLoading] = useState(true);
    const setTile = useWebsiteTitle();

    const fetchHotel = () => {
        setHotel(...props.backendHotels.filter(hotel => hotel.id == id));
        setTile(`Hotel - ${hotel.name}`);
        setLoading(false);
    };

    useEffect(() => {
        setTimeout(() => fetchHotel(), 500)
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
                                <h5>Ocena: {hotel.rating}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <p className={styles.description}>
                            {hotel.description}
                        </p>
                        {auth ? <p className="mt-2">Dostępne 4 pokoje.</p> :
                            <p className="mt-2">Dostępność: zaloguj się.</p>}

                    </div>
                </div>

            </div>
        </div>
    );
};

Hotel.propType = propTypes;

export default Hotel;