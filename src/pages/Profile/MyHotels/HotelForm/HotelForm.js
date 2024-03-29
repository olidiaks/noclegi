import Input from "../../../../components/forms/Inputs/Input";
import {inputChangeHandler} from "../../../../components/forms/Inputs/InputHelpers/inputChangeHandler";
import {useContext, useEffect, useState} from "react";
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton";
import {func, object, string} from "prop-types";
import themeContext from "../../../../context/themeContext";
import {
    checkValidationForTrackedInputs
} from "../../../../components/forms/Inputs/InputHelpers/checkValidationForTrackedInputs";
import {useNavigate} from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import {firebaseErrorsHandler} from "../../../../hooks/Firebase/firebaseErrorsHandler";

const propTypes = {
    title: string.isRequired,
    buttonLabel: string.isRequired,
    buttonLoadingLabel: string.isRequired,
    onSubmit: func.isRequired,
    hotel: object,
};

function HotelForm(props) {
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

    const [image, setImage] = useState({value: null, error: '', showError: false, rules: []});

    const [features, setFeatures] = useState({value: [], error: '', showError: false, rules: []});

    useEffect(() => {
        const hotel = props.hotel ?? {
            name: '',
            city: '',
            rooms: '',
            description: '',
            status: 'Aktywny',
            features: [],
        };
        setName({...name, value: hotel.name ?? '', showError: true, error: '', isValid: true});
        setCity({...city, value: hotel.city ?? '', showError: true, error: '', isValid: true});
        setRooms({...rooms, value: hotel.rooms ?? ''});
        setDescription({...description, value: hotel.description ?? '', showError: true, error: '', isValid: true});
        setStatus({...status, value: hotel.status ?? ''});
        setFeatures({...features, value: hotel.features ?? []});
    }, [props.hotel]);

    const [loading, setLoading] = useState(false);
    const [addSuccess, setAddSuccess] = useState(false);

    const [isEverythingValid, setIsEverythingValid] = useState(false);
    const trackValues = [city, description, name]
    useEffect(() => {
        setIsEverythingValid(checkValidationForTrackedInputs(trackValues));
    }, trackValues);

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [auth] = useAuth();
    const submit = async event => {
        event.preventDefault();
        setLoading(true);
        try {
            await props.onSubmit({
                name: name.value,
                city: city.value,
                rooms: rooms.value,
                description: description.value,
                status: status.value,
                features: features.value,
                idUser: auth.userId,
            });
            navigate("/profil/mojeHotele", {replace: false});
        } catch (e) {
            setError(firebaseErrorsHandler(e.response));
        }

        setLoading(false);
        setAddSuccess(true);
        setTimeout(() => setAddSuccess(false), 3000);

    }

    return (
        <>
            {error ? <div className="alert alert-danger">{error}</div> : null}
            {addSuccess ? <div className="alert alert-success">
                <p>Pomyślnie dodano nowy hotel.</p>
            </div> : null}
            <div className="card">
                <div className="card-header">
                    {props.title}
                </div>
                <div className="card-body">
                    <form onSubmit={submit}>

                        <Input
                            description="Nazwa"
                            value={name.value}
                            onChange={value => inputChangeHandler(value, name, setName)}
                            type="text"
                            isValid={name.isValid}
                            showError={name.showError}
                            invalidFeedback={name.error}
                        />

                        <Input
                            description="Miejscowość"
                            value={city.value}
                            onChange={value => inputChangeHandler(value, city, setCity)}
                            type="text"
                            isValid={city.isValid}
                            showError={city.showError}
                            invalidFeedback={city.error}
                        />

                        <Input
                            description="Opis"
                            value={description.value}
                            onChange={value => inputChangeHandler(value, description, setDescription)}
                            type="textarea"
                            isValid={description.isValid}
                            showError={description.showError}
                            invalidFeedback={description.error}
                        />

                        <Input
                            description="Pokoje"
                            value={rooms.value}
                            onChange={value => inputChangeHandler(value, rooms, setRooms)}
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
                            onChange={value => inputChangeHandler(value, features, setFeatures)}
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
                            onChange={value => inputChangeHandler(value, status, setStatus)}
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
                            label={props.buttonLabel}
                            loadingLabel={props.buttonLoadingLabel}
                            className={`btn-${theme}`}
                            disabled={!isEverythingValid}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

HotelForm.propTypes = propTypes;

export default HotelForm;