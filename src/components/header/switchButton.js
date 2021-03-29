import './switchButton.css';
import React, { useEffect, useState } from 'react';

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
        // else if (!theme) {
        // localStorage.removeItem('dark');
        // localStorage.setItem('light', JSON.stringify(theme));
        // console.log('yesss');
        // return false;
        // }
        // else {
        //     return true;
        // }
    }
    return (
        <div className='darkmode-button-container'>
            <h3>Switch Mode!</h3>
            <button onClick={themeToggler} className='darkmode-button'>
                <img
                    className='image-in-darkmode-button'
                    src='https://www.kindpng.com/picc/m/274-2741799_plain-half-black-and-white-background-hd-png.png'
                    alt=''
                />
            </button>
        </div>
    );
}
