import {render, screen} from "@testing-library/react";
import Menu from "./Menu";
import {BrowserRouter} from "react-router-dom";
import AuthContext from "../../context/authContext";

describe('Menu component', () => {
        test('renders Zaloguj if user is null', () => {
            render(<BrowserRouter><Menu/></BrowserRouter>);
            const link = screen.getByText(/zaloguj/i);
            expect(link).toBeInTheDocument();
        });
        test('renders Wyloguj if user exists', () => {
            render(
                <AuthContext.Provider value={
                    {
                        user: true,
                        login: () => {
                        },
                        logout: () => {
                        },
                    }
                }>
                    <BrowserRouter>
                        <Menu/>
                    </BrowserRouter>
                </AuthContext.Provider>
            );
            const link = screen.getByText(/wyloguj/i);
            expect(link).toBeInTheDocument();
        });
    }
)
