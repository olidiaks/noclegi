import PropTypes from "prop-types";

const propTypes = {
    getBestHotel: PropTypes.func.isRequired,
};


const BestHotel = props => {
    const hotel = props.getBestHotel();
    if (!null){
        return(
            <div className="card bg-success text-white">
                <div className="card-header">Najlepsza oferta!</div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title no-wrap">{hotel.name}</h5>
                        <p className="no-wrap">Ocena: {hotel.rating}</p>
                    </div>
                    <button className="btn btn-sm btn-light">Pokaż</button>
                </div>

            </div>
        )
    }
}

BestHotel.propTypes = propTypes;

export default BestHotel;