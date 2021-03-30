import './switchButton.css';
import React, { useEffect, useState } from 'react';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';

export default function SwitchButton() {
    const [theme, setTheme] = useState(initialMode());

    const themeToggler = () => {
        theme ? setTheme(false) : setTheme(true);
    };

    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(theme));

        if (theme) {
            return (document.documentElement.className = 'dark-mode');
        } else {
            return (document.documentElement.className = 'light-mode');
        }
    }, [theme]);

    function initialMode() {
        const darkMode = JSON.parse(localStorage.getItem('dark'));
        const valueInStorage = 'dark' in localStorage;
        if (valueInStorage) {
            return darkMode;
        }
    }
    return (
        <div className='darkmode-button-container'>
            {/* <h3>Switch Mode!</h3> */}
            <button onClick={themeToggler} className='darkmode-button'>
                <SettingsBrightnessIcon
                    fontSize='large'
                    color='primary'
                    className='image-in-darkmode-button'
                />
            </button>
        </div>
    );
}
