import React from 'react';

//Global Style
import GlobalStyle from './components/GlobalStyle';

//Import Pages
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <About />
      <GlobalStyle />
    </div>
  );
}

export default App;
