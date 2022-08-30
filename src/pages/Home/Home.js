import LastHotel from "../../components/Hotels/LastHotel/LastHotel";
import BestHotel from "../../components/Hotels/BestHotel/BestHotel";
import Hotels from "../../components/Hotels/Hotels";
import {useCallback, useEffect, useState} from "react";
import useStateStorage from "../../hooks/useStateStorage";
import PropTypes from "prop-types";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import {firebaseFetchHotels} from "../../hooks/Firebase/firebaseFetchHotels";

const propTypes = {
    setHotels: PropTypes.func.isRequired,
};


const Home = props => {
    const [loading, setLoading] = useState(true);
    const [hotels, setHotels] = useState([]);
    const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null);
    const getBestHotel = useCallback(() => {
        if (!hotels.length) {
            return null;
        } else {
            return hotels.sort((a, b) => b.rating - a.rating)[0];
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hotels]);

    const openHotel = hotel => setLastHotel(hotel);
    const removeLastHotel = () => setLastHotel(null);

    async function fetchHotels() {
        setHotels((await firebaseFetchHotels()).filter(hotel => hotel.status === "Aktywny"));
        console.log(hotels);
        setLoading(false);
    }

    useEffect(() => {
        fetchHotels();
    }, []);

    useWebsiteTitle("Strona główna | Noclegi");

    if (loading) {
        return <LoadingIcon/>
    }

    return (
        <>
            {lastHotel ? <LastHotel onRemove={removeLastHotel} {...lastHotel}/> : null}
            {getBestHotel() ? <BestHotel getBestHotel={getBestHotel}/> : null}
            <Hotels onOpen={openHotel} hotels={hotels}/>
        </>
    );
}


Home.propTypes = propTypes;

export default Home;