import React from 'react';

//Global Style
import GlobalStyle from './components/GlobalStyle';

//Navigation Bar
import Nav from './components/Nav'
import ScrollTop from './components/ScrollTop';

//Import Pages
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

//Import from Router
import { HashRouter as Router, Switch , Route, useLocation} from 'react-router-dom';

//Animation
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      < GlobalStyle />
      < ScrollTop />
      < Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch Location = { location } key = { location.pathname }>
          <Router basename = "/"> 
            < Route path="/" exact>
              < About />
            </Route>
            <Route path="/projects" exact>
              < Projects />
            </Route>
            <Route path="/projects/:id">
              <ProjectDetail />
            </Route>
            <Route path="/contact">
              < Contact />
            </Route>
          </Router>
        </Switch>
      </AnimatePresence>
      
    </div>
  );
}

export default App;
