import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import { filterCards, orderCards } from "../../redux/actions/actions";

function Favorites() {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  // console.log(myFavorites);

  function handleOrder(evento) {
    dispatch(orderCards(evento.target.value));
  }

  function handleFilter(evento) {
    dispatch(filterCards(evento.target.value));
  }

  return (
    <div>
      <div>
        <select name="filter" onChange={handleFilter} defaultValue="All">
          <option value="All">Mostrar todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <select name="order" onChange={handleOrder} defaultValue="orderChar">
          <option value="orderChar" disabled="disabled">
            order..
          </option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
      </div>

      <div>
        {myFavorites.map((char) => {
          return (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              status={char.status}
              species={char.species}
              gender={char.gender}
              origin={char.origin}
              image={char.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
