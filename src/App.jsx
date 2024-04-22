import { useState } from 'react';
import './App.css'
import items from './items.json'
import Item from './Item';
import Details from './Details';

function App() {
  const [userId, setUserId] = useState();
  const detailsClick = (userId) => {

    setUserId(userId);
  }

  return <div className="container">

    <div className="panel">
      {items.map(i => <Item key={i.id} clickCallback={(userId) => detailsClick(userId)} user={i} />)}
    </div>
    <div className="panel">
      <Details userId={userId} />
    </div>



  </div>

}

export default App
