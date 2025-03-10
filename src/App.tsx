import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (

    <div className='container'>
      <h1>Digital Menu</h1>
      <div className="card-grid">
        {data?.map(foodData => 
          <Card 
            title={foodData.title}
            image={foodData.image}
            price={foodData.price}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>New Iten</button>
    </div>

  )

}

export default App
