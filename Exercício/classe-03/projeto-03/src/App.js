import './App.css';
import sedans from './assets/icon-suvs.svg';
import suv from './assets/icon-suvs.svg';
import luxury from './assets/icon-luxury.svg';

function App() {
  return (
    <div class="card-container">
      <div class="card orange">
        <img src={sedans} alt="" />
        <h1>Sedans</h1>
        <p>
          Choose a sedan for its affordability and excellent fuel economy.Ideal for cruising in the city or on your next
          road trip.
        </p>
        <a class="btn" href="#">Learn More</a>
      </div>
      <div class="card blue">
        <img src={suv} alt="" />
        <h1>Suvs</h1>
        <p>
          Take an SUV for its spacious interior, power, and versatility.Perfect for your next family vacation and
          off-road adventures.
        </p>
        <a class="btn" href="#">Learn More</a>
      </div>
      <div class="card green">
        <img src={luxury} alt="" />
        <h1>Luxury</h1>
        <p>
          Cruise in the best car brands without the bloated prices.Enjoy the enhanced comfort of a luxury rental and
          arrive in style.
        </p>
        <a class="btn" href="#">Learn More</a>
      </div>
    </div>
  );
}

export default App;
