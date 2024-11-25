import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <div className='m-20'>
      <h1 className='text-4xl text-center font-bold'>Type of coffee {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 mt-24'>
      {
        coffees.map(coffee =>
          <CoffeeCard key={coffee._id}
            coffee={coffee}></CoffeeCard>)
      }
      </div>
    </div>
  )
}

export default App
