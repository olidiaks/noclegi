import {useParams} from "react-router-dom";
import {firebaseFetchHotels} from "../../hooks/Firebase/firebaseFetchHotels";
import {useEffect, useState} from "react";
import Hotels from "../../components/Hotels/Hotels";

export default function () {
    const {term} = useParams();
    const [hotels, setHotels] = useState([]);

    const searchHandler = async () => {
        setHotels((await firebaseFetchHotels()).filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase())));
    }

    useEffect(() => {
        searchHandler();
    }, [term]);

    return (
        <div>
            <h2>Wynik dla: "{term}"</h2>
            <Hotels hotels={hotels}/>
        </div>
    );
}