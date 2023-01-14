import Search from './Search';
import Conditions from './Conditions';
import Footer from './Footer';
import Forecast from './Forecast';
import Overview from './Overview';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <Search />
            <Overview />
            <Conditions />
            <Forecast />
            </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
