import {useContext} from 'react';
import ThemeContext from '../../context/themeContext';

const Footer = (props) => {
    const theme = useContext(ThemeContext);
    return (
        <div className={`text-center m-3 text-${theme.color}`}>
            noclegi 2024
        </div>
    );
}

export default Footer;
