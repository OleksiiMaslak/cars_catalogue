import styles  from './Home.module.css';
import {cars} from "./cars.data"
import CarItem from './car-item/CarItem';
  
function Home() {
  console.log(cars);
  return (
    <div>
      <div className="catalogue">
        <h1>Cars catalogue</h1>
      </div>
      {cars.length ? cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))
       : <p>There are no cars</p>
    }
    </div>
  );
}

export default Home;