import {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import InspiringQuote from "./components/InsparingQuote/InspiringQuote";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import Search from "./pages/Search/Search";
import Profile from "./pages/Profile/Profile";
import ProfileDetails from "./pages/Profile/ProfileDetails/ProfileDetails";
import MyHotels from "./pages/Profile/MyHotels/MyHotels";
import NotFound from "./components/404/404";

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
    const [hotels, setHotels] = useState([]);
    const [theme, setTheme] = useState('danger');
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const changeTheme = () => {
        const newTheme = theme === 'primary' ? 'danger' : 'primary';
        setTheme(newTheme);
    }


    const header = (
        <Header>
            <InspiringQuote/>
            <Searchbar/>
            <ThemeButton/>
        </Header>
    );

    const content = (
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={
                <Home
                    backendHotels={backendHotels}
                    hotels={hotels}
                    setHotels={setHotels}
                />
            }/>
            <Route path="/hotele/:id" element={<Hotel backendHotels={backendHotels}/>}/>
            <Route path="/wyszukaj/:term" element={<Search/>}/>
            <Route path='/profil/*' element={<Profile/>}>
                <Route path="szczegoly" element={<ProfileDetails/>}/>
                <Route path="mojeHotele" element={<MyHotels/>}/>
            </Route>
        </Routes>
    );
    const menu = <Menu/>;
    const footer = <Footer/>;

    return (
        <Router>
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
        </Router>
    );
}

export default App;
