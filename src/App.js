import { useState } from 'react';
import './App.css';
import Jokebox from './components/Jokebox';
import JokesAll from './components/JokesAll';
import Footer from './components/Footer';


function App() {
  const [open,setOpen]=useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading,setLoading]=useState(true);

  return (
    <div className="App">
       <JokesAll  setSelectedCategory={setSelectedCategory} setOpen={setOpen}/>
       {open && (<Jokebox setOpen={setOpen}  category={selectedCategory} loading={loading} setLoading={setLoading}/>)}
       <Footer/>
    </div>
    
  );
}   
export default App;