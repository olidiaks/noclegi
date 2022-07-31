import style from './InspiringQuote.module.css';
import {useEffect, useLayoutEffect, useState} from "react";
import random from "../../misic/Random";

const quotes = [
    'Ze wszystkich książek na świecie najlepsze historie można znaleźć na stronach paszportu.',
    'Wypełnij swoje życie przygodami, nie przedmiotami. Miej historie do opowiedzenia, nie rzeczy do pokazania.',
    'Podróż sprawia, że stajesz się skromny. Dostrzegasz, jak małe miejsce zajmujesz w świecie.” – Gustav Flaubert',
    'Nie byłam wszędzie, ale jest ono na mojej liście.” – Susan Sontag',
    'Świat jest książką i ci, którzy nie podróżują, czytają tylko jedną stronę.” – Św. Augustyn',

];

const InspiringQuote = () => {
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => setLoading(false), []);
    useLayoutEffect(() => setQuote(quotes[random(0, quotes.length)]), [loading]);

    return <p className={style.p}>{quote}</p>;
}
export default InspiringQuote;