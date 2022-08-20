import {useContext, useEffect, useRef, useState} from "react";
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton";
import themeContext from "../../../../context/themeContext";
import Input from "../../../../components/Inputs/Input";
import {AddHotelValidate} from "../../../../helpers/validation/addHoteValidation/addHotelValidate";

const AddHotel = () => {
    const theme = useContext(themeContext).color;

    const [name, setName] = useState({
        value: '',
        error: '',
        showError: false,
        rules: ['required', {rule: "min", length: 4}]
    });
    const [city, setCity] = useState({value: '', error: '', showError: false, rules: ['required']});
    const [rooms, setRooms] = useState({value: '2', error: '', showError: false, rules: ['required']});
    const [description, setDescription] = useState({
        value: '',
        error: '',
        showError: false,
        rules: ['required', {rule: "min", length: 10}]
    });
    const [status, setStatus] = useState({value: 'Aktywny', error: '', showError: false, rules: ['required']});

    const imageRef = useRef();
    const [image, setImage] = useState({value: null, error: '', showError: false, rules: []});

    const [features, setFeatures] = useState({value: [], error: '', showError: false, rules: []});

    const [loading, setLoading] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);

    const [isEverythingValid, setIsEverythingValid] = useState(false);
    const checkValidationForAllInputs = () => {
        const variables = [city, description, name];

        for (const variable of variables) {
            if (variable instanceof Object) {
                if (!variable.showError || !variable.isValid) {
                    setIsEverythingValid(false);
                    return null;
                }
            }
        }
        setIsEverythingValid(true);
    }

    useEffect(() => {
        checkValidationForAllInputs();
    }, [city, description, name]);

    const submit = event => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setAddSuccess(true);
            setTimeout(() => setAddSuccess(false), 3000);
        }, 500);
    }

    const onChangeHandler = (value, state, setState) => {
        setState({
                ...state,
                value: value,
                showError: true,
                ...AddHotelValidate(state.rules, value),
            }
        );
    };

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
                        value={name.value}
                        onChange={value => onChangeHandler(value, name, setName)}
                        type="text"
                        isValid={name.isValid}
                        showError={name.showError}
                        invalidFeedback={name.error}
                    />

                    <Input
                        description="Miejscowość"
                        value={city.value}
                        onChange={value => onChangeHandler(value, city, setCity)}
                        type="text"
                        isValid={city.isValid}
                        showError={city.showError}
                        invalidFeedback={city.error}
                    />

                    <Input
                        description="Opis"
                        value={description.value}
                        onChange={value => onChangeHandler(value, description, setDescription)}
                        type="textarea"
                        isValid={description.isValid}
                        showError={description.showError}
                        invalidFeedback={description.error}
                    />

                    <Input
                        description="Pokoje"
                        value={rooms.value}
                        onChange={value => onChangeHandler(value, rooms, setRooms)}
                        type="select"
                        option={[
                            {value: 1, label: 1},
                            {value: 2, label: 2},
                            {value: 3, label: 3},
                            {value: 4, label: 4},
                        ]}
                        isValid={rooms.isValid}
                        showError={rooms.showError}
                        invalidFeedback={rooms.error}
                    />

                    <Input onChange={value => setImage({...image, value})} description="Zdjęcie" type="file"/>

                    <Input
                        description="udogodnienia"
                        onChange={value => onChangeHandler(value, features, setFeatures)}
                        type="checkbox"
                        value={features.value}
                        option={[
                            {value: 'tv', label: 'TV'},
                            {value: 'wifi', label: 'Wi-Fi'},
                            {value: 'parking', label: 'Parking'},
                        ]}
                        isValid={features.isValid}
                        showError={features.showError}
                        invalidFeedback={features.error}
                    />

                    <Input
                        type="radio"
                        value={status.value}
                        onChange={value => onChangeHandler(value, status, setStatus)}
                        description="Status"
                        name="active"
                        option={[
                            {value: "Aktywny", label: "Aktywny"},
                            {value: "Ukryty", label: "Ukryty"}
                        ]}
                        isValid={status.isValid}
                        showError={status.showError}
                        invalidFeedback={status.error}
                    />

                    <LoadingButton
                        loading={loading}
                        label="Dodaj hotel."
                        loadingLabel="Dodawanie hotelu."
                        className={`btn-${theme}`}
                        disabled={!isEverythingValid}
                    />
                </form>
            </div>
        </div>
    </>;
};

export default AddHotel;