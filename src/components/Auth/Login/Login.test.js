import {fireEvent, screen, waitFor} from "@testing-library/react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./Login";
import {render} from "../testUtils/test-utils-AuthContext";
import {authenticationInstance as axios} from "../../../axios";

jest.mock('axios', function () {
    return {
        create: function () {
            return {
                post: jest.fn(() => Promise.resolve('')),
                get: jest.fn(() => Promise.resolve('')),
            }
        }
    }
});

describe('Login component', () => {

    const PreRenderLogin = () =>
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Navigate to="/login" state={{path: "/"}}/>}/>
                </Routes>
            </BrowserRouter>
        </>;

    test('renders Logowanie', () => {
        render(<PreRenderLogin/>);
        expect(screen.getByText(/logowanie/i)).toBeInTheDocument();
    });

    test('changes email value', () => {
        const utils = render(<PreRenderLogin/>);
        const emailInput = utils.getByLabelText('Email');

        fireEvent.change(emailInput, {target: {value: 'adam'}});
        expect(emailInput.value).toBe('adam');
    });

    test('show error on fail login', async () => {
        axios.post.mockImplementation(() => Promise.reject({response: {data: {error: {message: 'Błędne Dane'}}}}));

        const utils = render(<PreRenderLogin/>);
        const submitButton = utils.getByText('Zaloguj się');

        fireEvent.click(submitButton);

        await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

        setTimeout(() => expect(screen.getByText('Błędne Dane')).toBeInTheDocument(), 1000);

    });
});


