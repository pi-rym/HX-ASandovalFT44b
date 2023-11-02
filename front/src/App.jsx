import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx'
import Detail from './components/Detail.jsx';
import Error404 from './components/Error404.jsx';


function App() {
  const [characters, setCharacters] = useState([])

   const API_KEY = 'henrystaff'

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
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error404/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
