import { useState } from "react";

export default function SearchBar({onSearch}) {
   // console.log(onSearch);
   const [id, setId] = useState('')

   const handleChange = (evento) => {
      // console.log(evento);
      setId(evento.target.value)
   }

   const search = ()=>{
      onSearch(id)
      setId('')
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id}  />
         <button onClick={search}>Agregar</button>
      </div>
   );
}
