import {render, screen} from "@testing-library/react";
import App from "./App";

test('Loading data', () => {
    render(<App/>);
    const linkElement = screen.getByText(/Ładowanie/i);
    expect(linkElement).toBeInTheDocument();
})