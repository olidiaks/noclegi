import useWebsiteTitle from "../../../../hooks/useWebsiteTitle";
import HotelForm from "../HotelForm/HotelForm";
import instance from "../../../../axios";


const AddHotel = () => {

    useWebsiteTitle("Dodawanie hoteli | Noclegi.")


    async function submit(form) {
        await instance.post('/hotels.json', form);
    }

    return <>
        <HotelForm title="Dodaj Hotel" buttonLabel="Dodaj." buttonLoadingLabel="Dodawanie Hotelu" onSubmit={submit}/>
    </>;
};

export default AddHotel;