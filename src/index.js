import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const state = [];
let index = 0;

function useState(defaultValue) {
    const id = index++;
    if (state[id]) {
        return state[id];
    }
    const setValue = newValue => {
        state[id][0] = newValue;
        render();
    }
    const currentState = [defaultValue, setValue];
    state[id] = currentState;

    return currentState;

}

function TestHook() {
    const [value, setValue] = useState('start');
    const [text, setText] = useState('jd');

    return (
        <>
            <h1>{text}</h1>
            <input type="text" onChange={event => setValue(event.target.value)} value={value}/>
        </>
    );
}

const render = () => {
    index = 0;
    return (
        root.render(
            <React.StrictMode>
                <TestHook/>
                {/*<App />*/}
            </React.StrictMode>
        )
    );
}

render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
