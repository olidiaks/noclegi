import PropTypes, { func } from "prop-types";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import ThemeContext from "../../../context/themeContext";

const propTypes = {
    getBestHotel: PropTypes.func.isRequired,
    unmountBestHotels: func.isRequired,
};


const BestHotel = props => {
    const theme = useContext(ThemeContext).color;
    const endTime = moment()
        .add(Math.floor(Math.random() * 60), 'minutes')
        .add(Math.floor(Math.random() * 60), 'seconds');
    const hotel = props.getBestHotel();
    const [time, setTime] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const leftTime = -moment().diff(endTime) / 1000;
            const minute = Math.floor(leftTime / 60);
            let seconds = Math.floor(leftTime % 60);
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            setTime(`${minute}minut i ${seconds}sekund`);
            if (leftTime <= 0) {
                props.unmountBestHotels();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="card bg-success text-white">
            <div className="card-header">Najlepsza oferta!</div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title no-wrap">{hotel.name}</h5>
                    <p className="no-wrap">Ocena: {hotel.rating}</p>
                </div>
                <p>Do końca oferty pozostało: {time}</p>
                <Link to={`/hotele/${hotel.id}`} className={`btn btn-sm btn-${theme}`}>Pokaż</Link>
            </div>
        </div>
    )
}

BestHotel.propTypes = propTypes;

export default BestHotel;
