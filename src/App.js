// import { Box } from '@material-ui/core';
import './App.css';
import Resume from './components/resume/resume';
import Navbar from './components/header/navbar';
import Contact from './components/contact/contact';
// import ProjectsList from './components/portfolio/ProjectsCard';
import ProjectsList from './components/portfolio/ProjectsList';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Route path='/resume' component={Resume} />
                <Route path='/contact' component={Contact} />
                <Route exact path='/' component={ProjectsList} />
                <Route path='/list' component={ProjectsList} />
            </div>
        </BrowserRouter>
    );
}

export default App;
