import {useCallback, useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import BestHotel from "./components/BestHotel/BestHotel";
import InspiringQuote from "./components/InsparingQuote/InspiringQuote";
import useStateStorage from "./hooks/useStateStorage";

const backendHotels = [
    {
        id: 1,
        name: 'Pod akacjami',
        city: 'Warszawa',
        rating: 8.3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
        image: ''
    },
    {
        id: 2,
        name: 'Dębowy',
        city: 'Lublin',
        rating: 8.8,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
        image: ''
    }
];

function App() {
    const [storage, setStorage] = useStateStorage('klucz', 'wartości startowa');
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState('danger');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getBestHotel = useCallback(() => {
        if (!backendHotels.length) {
            return null;
        } else {
            return backendHotels.sort((a, b) => b.rating - a.rating)[0];
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [backendHotels]);

    const changeTheme = () => {
        const newTheme = theme === 'primary' ? 'danger' : 'primary';
        setTheme(newTheme);
    }
    const searchHandler = term => {
        const newHotels = [...backendHotels]
            .filter(x => x.name
                .toLowerCase()
                .includes(term.toLowerCase()));
        setHotels(newHotels);
    }

    useEffect(() => {
        setTimeout(() => {
            setHotels(backendHotels);
            setLoading(false);
        }, 1000);
    }, []);


    const header = (
        <Header>
            <InspiringQuote/>
            <Searchbar
                onSearch={term => searchHandler(term)}/>
            <ThemeButton/>
        </Header>
    );
    const content = (
        loading
            ? <LoadingIcon/>
            : <>
                <input type="text" value={storage.toString()} onChange={e => setStorage(e.target.value)}/>
                {!getBestHotel() ? <></> : <BestHotel getBestHotel={getBestHotel}/>}
                <Hotels hotels={hotels}/>
            </>
    );
    const menu = <Menu/>;
    const footer = <Footer/>;

    return (
        <AuthContext.Provider value={{
            isAuthenticated: isAuthenticated,
            login: () => setIsAuthenticated(true),
            logout: () => setIsAuthenticated(false),
        }}>
            <ThemeContext.Provider value={{
                color: theme,
                changeTheme: changeTheme
            }}>
                <Layout
                    header={header}
                    menu={menu}
                    content={content}
                    footer={footer}
                />
            </ThemeContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
