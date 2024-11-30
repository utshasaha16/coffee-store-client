import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='m-20'>
      <div className='text-center mb-4 font-medium space-x-4'>
      <Link to='/addCoffee'>Add Coffee</Link>
      <Link to='/signIn'>Sign In</Link>
      
      </div>
      <h1 className='text-4xl text-center font-bold'>Type of coffee {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 mt-24'>
      {
        coffees.map(coffee =>
          <CoffeeCard key={coffee._id}
          coffees={coffees}
          setCoffees={setCoffees}
            coffee={coffee}></CoffeeCard>)
      }
      </div>
    </div>
  )
}

export default App
