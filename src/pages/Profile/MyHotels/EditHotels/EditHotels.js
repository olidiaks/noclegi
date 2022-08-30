import {memo, useEffect, useState} from "react";
import HotelForm from "../HotelForm/HotelForm";
import {useParams} from "react-router-dom";
import {firebaseFetchHotels} from "../../../../hooks/Firebase/firebaseFetchHotels";
import instance from "../../../../axios";

const EditHotels = () => {

    const [hotel, setHotel] = useState(null);
    const {id} = useParams();
    const fetchHotel = async () => {
        setHotel(await firebaseFetchHotels(id));
    }

    useEffect(() => {
        fetchHotel();
    }, []);

    const submit = form => {
        instance.put(`/hotels/${id}.json`, form);
    };

    return (
        <HotelForm
            title="Edytowanie hotelu"
            buttonLabel="Zapisz"
            buttonLoadingLabel="Zapisywanie zmian."
            hotel={hotel}
            onSubmit={submit}
        />
    )
}

export default memo(EditHotels);