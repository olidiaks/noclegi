import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};
const LastHotel = props =>
    <div className="card bg-light text-black my-2">
        <div className="card-header">
            Ostatnio oglądałeś ten hotel. Wciąż zainteresowany?
        </div>
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h5 className="card-title no-wrap">{props.name}</h5>
                <span className="no-wrap badge badge-light text-black">{props.city}</span>
            </div>
            <div style={{width: '100px'}} className="ms-auto d-flex justify-content-between">
                <Link to={`/hotele/${props.id}`} className="btn btn-sm btn-dark">Tak!</Link>
                <button onClick={props.onRemove} className="btn btn-sm btn-dark">Nie!</button>
            </div>
        </div>
    </div>;

LastHotel.propTypes = propTypes;

export default LastHotel;