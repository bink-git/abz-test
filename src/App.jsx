import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/HeroBlock/Hero';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Hero />
        <Users />
      </div>
    </div>
  );
}

export default App;
