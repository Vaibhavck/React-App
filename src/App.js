import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Grid from './components/Grid';
import './css/navbar.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="custom-container"><Grid/></div>
    </div>
  );
}

export default App;
