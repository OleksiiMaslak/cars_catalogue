import styles from '../Home.module.css'

function CarItem({ car }) {
    return (
         <div key={car.id} className={styles.cart}>
          <h2>{car.name}</h2>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${car.image})`
          }}
          />
          <p>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(car.price)}
          </p>
        <button>Order now</button>
      </div>
    )
        
}
export default CarItem;