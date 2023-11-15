import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Nav from "./components/nav/Nav.jsx";
import Cards from "./components/cards/Cards.jsx";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Error404 from "./components/error404/Error404.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  //   console.log(location);
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const API_KEY = "henrystaff";
  const EMAIL = "";
  const PASSWORD = "";
  // const URL = `https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`

  // const EMAIL = 'auri@mail.com'
  // const PASSWORD = 'pass1234'

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    if (!id) alert("Ingresa por favor un ID");
    if (characters.find((char) => char.id === parseInt(id))) return alert(`Ya existe el personaje con ese id ${id}`);

    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => setCharacters((oldChars) => [...oldChars, data]))
      .catch((err) => alert(err.response.data.error));
  }

  const onClose = (id) =>
    setCharacters(characters.filter((char) => char.id !== parseInt(id)));

  function login(userData) {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    } else alert("el email o la contraseña son incorrectas");
  }

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
