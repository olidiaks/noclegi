import React, {lazy, Suspense, useState} from 'react';
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
import NotFound from "./components/404/404";
import Login from "./components/Auth/Login/Login";
import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import ErrorBoundary from "./hoc/ErrorBoundary";

const AddHotel = lazy(() => import("./pages/Profile/MyHotels/AddHotel/AddHotel"));
const MyHotels = lazy(() => import("./pages/Profile/MyHotels/MyHotels"));
const ProfileDetails = lazy(() => import("./pages/Profile/ProfileDetails/ProfileDetails"));
const Profile = lazy(() => import("./pages/Profile/Profile"));

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
        <Suspense fallback={<LoadingIcon/>}>
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
                <Route
                    path="/profil/mojeHotele/dodaj-nowy-hotel"
                    element={<AuthenticatedRoute
                        path="/profil/mojeHotele/dodaj-nowy-hotel"><AddHotel/></AuthenticatedRoute>}
                >
                </Route>
                {/*<Route path="/profil/mojeHotele/dodaj-nowy-hotel" element={<AddHotel/>}/>*/}
                <Route path='/profil/*' element={<AuthenticatedRoute path="/profil"/>}>
                    <Route element={<Profile/>}>
                        <Route path="szczegoly" element={<ProfileDetails/>}/>
                        <Route path="mojeHotele" element={<MyHotels/>}/>
                    </Route>
                </Route>
                <Route path="/zaloguj" element={<Login/>}/>
            </Routes>
        </Suspense>
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
                    <ErrorBoundary>
                        <Layout
                            header={header}
                            menu={menu}
                            content={content}
                            footer={footer}
                        />
                    </ErrorBoundary>
                </ThemeContext.Provider>
            </AuthContext.Provider>
        </Router>
    );
}

export default App;
