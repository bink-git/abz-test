import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Hero from './components/HeroBlock/Hero';
import Users from './components/Users/Users';
import Context from './hooks/Context';

function App() {
  return (
    <Router>
      <Context>
        <div className="App">
          <Header />
          <div className="wrapper">
            <Hero />
            <Users />
            <Form />
          </div>
        </div>
      </Context>
    </Router>
  );
}

export default App;
