import { connect, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import style from './Card.module.css'

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
}) {
  // console.log(props);
  const myFavorites = useSelector((state) => state.myFavorites);
  const { pathname } = useLocation();
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.container}>
     <div>
     {pathname === "/home" && <button onClick={() => onClose(id)}>X</button>}

{isFav ? (
  <button onClick={handleFavorite}>❤️</button>
) : (
  <button onClick={handleFavorite}>🤍</button>
)}
     </div>
      <h2>{id}</h2>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2 style={{fontSize:'18px'}}>{origin}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}
// function mapStateToProps(state){
//    return {
//       myFavorites: state.myFavorites
//    }
// }

export default connect(null, mapDispatchToProps)(Card);
