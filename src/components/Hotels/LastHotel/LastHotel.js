import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../../context/themeContext";

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};
const LastHotel = props => {
    const theme = useContext(ThemeContext).color;
    return < div className = "card bg-light text-black my-2" >
        <div className="card-header">
            Ostatnio oglądałeś ten hotel. Wciąż zainteresowany?
        </div>
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h5 className="card-title no-wrap">{props.name}</h5>
                <span className="no-wrap badge badge-light text-black">{props.city}</span>
            </div>
            <div style={{width: '100px'}} className="ms-auto d-flex justify-content-between">
                <Link to={`/hotele/${props.id}`} className={`btn btn-sm btn-${theme}`}>Tak!</Link>
                <button  onClick={props.onRemove} className={`btn btn-sm btn-${theme}`}>Nie!</button>
            </div>
        </div>
    </div >;
}

LastHotel.propTypes = propTypes;

export default LastHotel;
