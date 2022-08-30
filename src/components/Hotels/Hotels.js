import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';
import {memo} from "react";

const propTypes = {
    hotels: PropTypes.array.isRequired,
    onOpen: PropTypes.func,
}
const Hotels = props =>
    <div className={styles.container}>
        <h2 className={styles.title}>Oferty:</h2>
        {props.hotels.map(hotel => (
            <Hotel
                onOpen={props.onOpen}
                key={hotel.id} {...hotel}
            />
        ))}
    </div>;

Hotels.propTypes = propTypes;

export default memo(Hotels);