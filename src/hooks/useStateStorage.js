import {useState} from "react";

function useStateStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        const storageValue = window.localStorage.getItem(key);
        return storageValue ? JSON.parse(storageValue) : defaultValue;
    });

    const setValue = (newValue) => {
        setState(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [state, setValue];
}

export default useStateStorage;