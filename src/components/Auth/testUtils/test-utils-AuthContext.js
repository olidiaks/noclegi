import AuthContext from "../../../context/authContext";
import {render} from "@testing-library/react";

const TestUtilsAuthContext = ({children}) =>
    <AuthContext.Provider value={
        {
            user: true,
            login: () => {
            },
            logout: () => {
            },
        }
    }
    >
        {children}
    </AuthContext.Provider>;

const customRender = (ui, options) => render(ui, {wrapper: TestUtilsAuthContext, ...options});

export * from '@testing-library/react';
export {customRender as render};