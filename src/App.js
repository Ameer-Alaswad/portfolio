import './App.css';
import Resume from './components/resume/resume';
import Navbar from './components/header/navbar';
import Contact from './components/contact/contact';
import AboutMe from './components/AboutMe/aboutMe';
import ProjectsList from './components/portfolio/ProjectsList';
import ProjectPage from './components/projectPage/ProjectPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function App() {
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

    // console.log(`document.documentElement.className`, 'light' in localStorage);
    return (
        <BrowserRouter>
            <div>
                <Navbar theme={theme} setTheme={setTheme} />
                <button onClick={themeToggler}>test</button>
                <Route exact path='/' component={AboutMe} />
                <Route exact path='/' component={ProjectsList} />
                <Switch>
                    <Route path='/resume' component={Resume} />z
                    <Route path='/contact' component={Contact} />
                    <Route path='/list' component={ProjectsList} />
                    <Route
                        path='/ProjectsList/:project'
                        component={ProjectPage}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
