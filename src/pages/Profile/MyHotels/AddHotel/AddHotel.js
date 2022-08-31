import useWebsiteTitle from "../../../../hooks/useWebsiteTitle";
import HotelForm from "../HotelForm/HotelForm";
import instance from "../../../../axios";
import useAuth from "../../../../hooks/useAuth";


const AddHotel = () => {

    useWebsiteTitle("Dodawanie hoteli | Noclegi.")

    const [{token}] = useAuth();

    async function submit(form) {
        await instance.post(`/hotels.json?auth=${token}`, form);
    }

    return <>
        <HotelForm title="Dodaj Hotel" buttonLabel="Dodaj." buttonLoadingLabel="Dodawanie Hotelu" onSubmit={submit}/>
    </>;
};

export default AddHotel;