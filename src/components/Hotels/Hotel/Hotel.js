import PropTypes from 'prop-types';
import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';
import ThemeContext from '../../../context/themeContext';
import {useContext} from 'react';
import useAuth from "../../../hooks/useAuth";
import {Link} from "react-router-dom";
import {LoginButton} from "../../UI/LoginButton/LoginButton";


const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number,
    description: PropTypes.string.isRequired,
    onOpen: PropTypes.func,
};

function Hotel(props) {
    const theme = useContext(ThemeContext);

    const [auth] = useAuth();

    const clickHandler = () => props.onOpen(props);


    return (
        <div className={`card ${styles.hotel}`}>
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
                                <p className={styles.title}>{props.name}</p>
                                <span className="badge badge-light">{props.city}</span>
                            </div>
                            <div className="col text-end">
                                <h5>Ocena: {props.rating ?? 0}</h5>
                                <Link
                                    to={`/hotele/${props.id}`}
                                    className={`btn btn-${theme.color} mt-2 px-4`}
                                    onClick={clickHandler}
                                >
                                    Pokaż
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <p className={styles.description}>
                            {props.description}
                        </p>
                        {auth ? <p className="mt-2">Dostępność {props.rooms} pokoje.</p> :
                            <LoginButton>Dostępność: zaloguj się.</LoginButton>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

Hotel.propTypes = propTypes;

export default Hotel;