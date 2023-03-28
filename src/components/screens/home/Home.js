// import styles  from './Home.module.css';
import {cars as carsData} from "./cars.data"
import CarItem from './car-item/CarItem';
import { useMemo, useState } from "react";
import CreateCarForm from './car-item/create-car-form/CreateCarForm'
  
function Home() {
  // const filteredCars = useMemo(() => cars.filter(car => car.price > 100000), [])
  const [cars, setCars] = useState(carsData)
  return (
    <div>
      <div className="catalogue">
        <h1>Cars catalog</h1>
        <CreateCarForm setCars={setCars}></CreateCarForm>
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