import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import moment from "moment";

const propTypes = {
    getBestHotel: PropTypes.func.isRequired,
};


const BestHotel = props => {
    const endTime = moment()
        .add(Math.floor(Math.random() * 60), 'minutes')
        .add(Math.floor(Math.random() * 60), 'seconds');
    const hotel = props.getBestHotel();
    const [time, setTime] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const leftTime = -moment().diff(endTime) / 1000;
            const minute = Math.floor(leftTime / 60);
            const seconds = Math.floor(leftTime % 60);
            setTime(`${minute}minut i ${seconds}sekund`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    if (!null) {
        return (
            <div className="card bg-success text-white">
                <div className="card-header">Najlepsza oferta!</div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title no-wrap">{hotel.name}</h5>
                        <p className="no-wrap">Ocena: {hotel.rating}</p>
                    </div>
                    <p>Do końca oferty pozostało: {time}</p>
                    <button className="btn btn-sm btn-light">Pokaż</button>
                </div>

            </div>
        )
    }
}

BestHotel.propTypes = propTypes;

export default BestHotel;