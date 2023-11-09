import Card from "../card/Card";
import style from './Cards.module.css'

export default function Cards({ characters, onClose }) {
  // console.log(characters);
  return (
    <div className={style.container}>
      {characters.map((char) => (
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
      ))}
    </div>
  );
}
