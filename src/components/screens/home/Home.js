// import styles  from './Home.module.css';
// import {cars as carsData} from "./cars.data"
// import {useMemo} from "react";
import CarItem from './car-item/CarItem';
import { useEffect, useState } from "react";
import CreateCarForm from './car-item/create-car-form/CreateCarForm';
import { CarService } from "../../../services/car-service";
  
function Home() {
  // const filteredCars = useMemo(() => cars.filter(car => car.price > 100000), [])
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Это просто заготовка для работы с сервером
    const fetchData = async () => {
      const response = await CarService;
      setCars(response.getAll())
    }
    fetchData()
  }, [])

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