export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   // console.log(props);
   return (
      <div>
         <button onClick={()=> onClose(id)}>X</button>
         <h2>{id}</h2>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} />
      </div>
   );
}