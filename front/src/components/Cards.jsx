import Card from './Card';

export default function Cards({characters, onClose}) {
   // console.log(characters);
   return (
      <div>
      {characters.map((char)=> (
          // console.log(char);
         <Card
         key={char.id}
         id={char.id}
         name={char.name}
         status={char.status}
         species={char.species}
         gender={char.gender}
         origin={char.origin.name}
         image={char.image}
         onClose={onClose}
      />
      )
      )}
   </div>
   )
}
