import { useState } from "react";
import { DivSearch, Btn, Input } from "./SearchStyled";

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
      <DivSearch>
         <Input type='search' onChange={handleChange} value={id}  />
         <Btn onClick={search}>Agregar</Btn>
      </DivSearch>
   );
}
