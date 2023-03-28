// Эмулятор запроса на сервер. предположительно с использованием Axios API

import {cars as carsData} from '../components/screens/home/cars.data'


export const CarService = {
    getAll() {
        // const response = await carsData;
        return carsData;
    }
}