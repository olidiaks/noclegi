import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import styles from "../../components/Hotels/Hotel/Hotel.module.css";
import AuthContext from "../../context/authContext";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import {LoginButton} from "../../components/UI/LoginButton/LoginButton";
import {firebaseFetchHotels} from "../../hooks/Firebase/firebaseFetchHotels";
import Input from "../../components/forms/Inputs/Input";
import themeContext from "../../context/themeContext";
import instance from "../../axios";

const propTypes = {
    backendHotels: PropTypes.array.isRequired,
};

const Hotel = props => {
    const auth = useContext(AuthContext).user;
    const {id} = useParams();
    const [hotel, setHotel] = useState({});
    const [loading, setLoading] = useState(true);
    const setTile = useWebsiteTitle();
    const {color} = useContext(themeContext);

    const fetchHotel = async () => {
        setHotel(await firebaseFetchHotels(id));
        setTile(`Hotel - ${hotel.name} | Noclegi`);
        setLoading(false);
    };

    useEffect(() => {
        fetchHotel()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const navigate = useNavigate();
    const [rating, setRating] = useState(3);
    const rateHotel = async () => {
        try {
            await instance.put(`/hotels/${id}/rating.json`, rating);
            navigate('/', {replace: false});
        } catch (e) {
            console.log(e.response);
            throw new Error(e.response);
        }
    }

    return loading ? <LoadingIcon/> : (
        <div className={`card`}>
            <div className="card-body">

                <div className="row">
                    <div className="col-12 col-md-4">
                        <img
                            src="https://placeimg.com/220/180/arch"
                            alt=""
                            className="img-fluid img-thumbnail"/>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            <div className="col">
                                <p className={styles.title}>{hotel.name}</p>
                                <span className="badge badge-light text-black">{hotel.city}</span>
                            </div>
                            <div className="col text-end">
                                <h5>Ocena: {hotel.rating ?? "bark ocen"}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <p className={styles.description}>
                            {hotel.description}
                        </p>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                {auth ? <p className="mt-2">Dostępne 4 pokoje.</p> :
                                    <LoginButton>Dostępność: zaloguj się.</LoginButton>}
                            </div>
                            <div className="col-12 col-md-8">
                                {auth ?
                                    <div className="row">
                                        <div className="col-8">
                                            <Input
                                                onChange={e => setRating(e.target.value)}
                                                value={rating}
                                                type="select"
                                                option={[
                                                    {value: 1, label: 1},
                                                    {value: 2, label: 2},
                                                    {value: 3, label: 3},
                                                    {value: 4, label: 4},
                                                    {value: 5, label: 5}
                                                ]}
                                            />
                                        </div>
                                        <div className="col-4">
                                            <button onClick={rateHotel} className={`btn h-100 btn-${color}`}>Dodaj
                                                ocenę.
                                            </button>
                                        </div>
                                    </div> :
                                    <LoginButton>Zaloguj się aby móc ocenić hotel.</LoginButton>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Hotel.propType = propTypes;

export default Hotel;