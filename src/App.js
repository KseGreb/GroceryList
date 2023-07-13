
import './App.css';
import { GroceryList } from './GroceryList';
import image1 from './man.jpg'
import image2 from './shopping.jpg'



function App() {
  return (
    <div className="App">
      <div className='container'>
      <img src={image2} alt='shopping' width="200px"/>
      </div>
      <div className='container'>
      <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className='container'>
      <img className='image1' src={image1} alt='man' width="200px"/>
      </div>
    </div>
  );
}

export default App;
