import './App.css';
import Resume from './components/resume/resume';
import Navbar from './components/header/navbar';
import SwitchButton from './components/header/switchButton';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import AboutMe from './components/AboutMe/aboutMe';
import ProjectsList from './components/portfolio/ProjectsList';
import ProjectPage from './components/projectPage/ProjectPage';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <SwitchButton />
                <Route exact path='/' component={AboutMe} />
                <Route exact path='/' component={ProjectsList} />
                <Route path='/resume' component={Resume} />
                <Route path='/contact' component={Contact} />
                <Route path='/ProjectsList/:project' component={ProjectPage} />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
