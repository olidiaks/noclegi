import {useState} from "react";

function useStateStorage(key, defaultValue) {
    const [state, setState] = useState(defaultValue);
    const storageValue = window.localStorage.getItem(key);
    let value = storageValue ? JSON.parse(storageValue) : state;
    const setValue = (newValue) => {
        setState(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [value, setValue];
}

export default useStateStorage;