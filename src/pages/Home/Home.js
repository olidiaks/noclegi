import LastHotel from "../../components/Hotels/LastHotel/LastHotel";
import BestHotel from "../../components/Hotels/BestHotel/BestHotel";
import Hotels from "../../components/Hotels/Hotels";
import {useCallback, useEffect, useState} from "react";
import useStateStorage from "../../hooks/useStateStorage";
import PropTypes from "prop-types";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const propTypes = {
    backendHotels: PropTypes.array.isRequired,
    hotels: PropTypes.array.isRequired,
    setHotels: PropTypes.func.isRequired,
};


const Home = props => {
    const [loading, setLoading] = useState(true);

    const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null);
    const getBestHotel = useCallback(() => {
        if (!props.backendHotels.length) {
            return null;
        } else {
            return props.backendHotels.sort((a, b) => b.rating - a.rating)[0];
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.backendHotels]);

    const openHotel = hotel => setLastHotel(hotel);
    const removeLastHotel = () => setLastHotel(null);

    useEffect(() => {
        setTimeout(() => {
            props.setHotels(props.backendHotels);
            setLoading(false);
        }, 1000);
    }, []);

    useWebsiteTitle("Strona główna | Noclegi");

    if (loading) {
        return <LoadingIcon/>
    }

    return (
        <>
            {lastHotel ? <LastHotel onRemove={removeLastHotel} {...lastHotel}/> : null}
            {getBestHotel() ? <BestHotel getBestHotel={getBestHotel}/> : null}
            <Hotels onOpen={openHotel} hotels={props.hotels}/>
        </>
    );
}


Home.propTypes = propTypes;

export default Home;