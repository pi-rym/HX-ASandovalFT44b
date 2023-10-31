import { useState } from 'react';
import axios from 'axios'
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards.jsx';


function App() {
  const [characters, setCharacters] = useState([])

   const API_KEY = 'pi-hx-mferreyra'

   function onSearch(id){
      if(!id) alert('Ingresa por favor un ID')
      if(characters.find(char => char.id === parseInt(id))) return alert (`Ya existe el personaje con ese id ${id}`)

      axios(`https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`)
      .then(({data})=>{
         // console.log(data);
         if(data.name){
            setCharacters(oldChars => [...oldChars,data])
         }
         else {
           alert( 'No hay personajes con ese ID')
         }
      })
      .catch(err => console.log(err))
   }

   const onClose = (id)=> setCharacters(characters.filter(char => char.id !== parseInt(id))) 


   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
