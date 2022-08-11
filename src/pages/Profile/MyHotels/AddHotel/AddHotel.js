import {useContext, useRef, useState} from "react";
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton";
import themeContext from "../../../../context/themeContext";
import Input from "../../../../components/Inputs/Input";

const AddHotel = () => {
    const theme = useContext(themeContext).color;

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [rooms, setRooms] = useState("1");
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState("Aktywny");

    const imageRef = useRef();
    const [image, setImage] = useState(null);

    const [features, setFeatures] = useState(['parking']);


    const [loading, setLoading] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);
    const submit = event => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setAddSuccess(true);
            setTimeout(() => setAddSuccess(false), 3000);
        }, 500);
    }

    return <>
        {addSuccess ? <div className="alert alert-success">
            <p>Pomyślnie dodano nowy hotel.</p>
        </div> : null}
        <div className="card">
            <div className="card-header">
                Nowy hotel
            </div>
            <div className="card-body">
                <form onSubmit={submit}>

                    <Input
                        description="Nazwa"
                        value={name}
                        onChange={value => setName(value)}
                        type="text"
                        isValid={true}
                        showError={true}
                    />

                    <Input
                        description="Miejscowość"
                        value={city}
                        onChange={value => setCity(value)}
                        type="text"
                        isValid={true}
                        showError={true}
                    />

                    <Input
                        description="Opis"
                        value={description}
                        onChange={value => setDescription(value)}
                        type="textarea"
                        showError={true}
                        isValid={true}
                    />

                    <Input
                        description="Pokoje"
                        value={rooms}
                        onChange={value => setRooms(value)}
                        type="select"
                        option={[
                            {value: 1, label: 1},
                            {value: 2, label: 2},
                            {value: 3, label: 3},
                            {value: 4, label: 4},
                        ]}
                    />

                    <Input onChange={value => setImage(value)} description="Zdjęcie" type="file"/>

                    <Input
                        description="udogodnienia"
                        onChange={value => setFeatures(value)}
                        type="checkbox"
                        value={features}
                        option={[
                            {value: 'tv', label: 'TV'},
                            {value: 'wifi', label: 'Wi-Fi'},
                            {value: 'parking', label: 'Parking'},
                        ]}
                    />

                    <Input
                        type="radio"
                        value={status}
                        onChange={value => setStatus(value)}
                        description="Status"
                        name="active"
                        option={[
                            {value: "Aktywny", label: "Aktywny"},
                            {value: "Ukryty", label: "Ukryty"}
                        ]}
                    />

                    <LoadingButton
                        loading={loading}
                        label="Dodaj hotel."
                        loadingLabel="Dodawanie hotelu."
                        className={`btn-${theme}`}
                    />
                </form>
            </div>
        </div>
    </>;
};

export default AddHotel;