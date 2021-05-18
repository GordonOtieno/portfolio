import './App.scss';
import NavBar from  './components/NavBar'
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage'
import BlogPage from './pages/BlogPage'
import {useState} from  'react';

function App() {

const [navToggle, setnavToggle] = useState(false)

const navClick = ()=>{
 setnavToggle(!navToggle)
}
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle':''}`}>
        <NavBar />
      </div>
<div className ="nav-btn" onClick={navClick}>
  <div className="lines-1"></div>
  <div className="lines-2"></div>
  <div className="lines-3"></div>
</div>

      <div className="main-content">
   <div className="content">
     <Switch>
     <Route path='/' exact>
       <HomePage />
     </Route>   <Route path='/about' exact>
       <AboutPage />
     </Route>
     <Route path='/portfolios' exact>
       <PortfolioPage />
     </Route>
     <Route path='/Blogs' exact>
       <BlogPage />
     </Route>
     <Route path='/contact' exact>
       <ContactPage />
     </Route>
     </Switch>
   </div>
      </div>
     
    </div>
  );
}

export default App;

/**use the command 'npm start' to start the server **/
