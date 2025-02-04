import React from 'react'

const Cars = () => {
 
  const carData = [
    {id: 1, name: "Honda Civic", price: "PKR 9,899,000", description: "Honda Civic 2024 Blackish", image: "civic-2024.png" },
    {id: 2, name: "Hilux 4x4", price: "PKR 1.1 - 1.54 crore", description: "Toyota Hilux Dark Gray", image: "hilux-2024.png" },
    {id: 3, name: "Corolla GLI", price: "PKR 3,892,000 ", description: "Toyota Corolla GLI", image: "corolla-2024.png" },
    {id: 4, name: "Land cruiser ", price: "PKR 12.0 crore", description: "Toyota Land Cruiser SUV ", image: "landcruser-2024.png" },
    {id: 5, name: "Suzuki Cultus", price: "Rs 2.33 Million", description: "Suzuki Cultus 2024", image: "cultus-2024.png" },
    {id: 6, name: "Suzuki Alto", price: "PKR 3,038,540", description: "Suzuki Alto VXL 2024", image: "alto-2024.png" },
  ]



  return (
    <div>
      <div className='cars'>
         {carData.map((car) => (
          <div key={car.id} className='car-card'>
            <img src={car.image} alt={car.name} /> 
            <h3> {car.name}</h3>
            <p>{car.description}</p>
            <div className='price'> ${car.price} </div>
            <button> Add to Cart </button>
          </div>

         ))}
      </div>
    </div>
  )
}

export default Cars
