// import { Box } from '@material-ui/core';
import './App.css';
import Resume from './components/resume/resume';
import Navbar from './components/header/navbar';
import Contact from './components/contact/contact';
import AboutMe from './components/AboutMe/aboutMe';
import ProjectsList from './components/portfolio/ProjectsList';
import ProjectPage from './components/projectPage/ProjectPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Route exact path='/' component={AboutMe} />
                <Route exact path='/' component={ProjectsList} />
                <Switch>
                    <Route path='/resume' component={Resume} />
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
