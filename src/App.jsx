import './App.scss';
import Form from './components/Form/Form';
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
        <Form />
      </div>
    </div>
  );
}

export default App;
