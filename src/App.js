import React from 'react';

//Global Style
import GlobalStyle from './components/GlobalStyle';

//Navigation Bar
import Nav from './components/Nav'

//Import Pages
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

//Import from Router
import {Switch , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      < GlobalStyle />
      < Nav />
      <Switch>
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
      </Switch>
    </div>
  );
}

export default App;
