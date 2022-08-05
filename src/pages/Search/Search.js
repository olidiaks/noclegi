import {useParams} from "react-router-dom";

export default function () {
    const {term} = useParams();

    // const searchHandler = term => {
    //     const newHotels = [...backendHotels]
    //         .filter(x => x.name
    //             .toLowerCase()
    //             .includes(term.toLowerCase()));
    //     setHotels(newHotels);
    // }
    return (
        <h2>Wynik dla: "{term}"</h2>
    );
}