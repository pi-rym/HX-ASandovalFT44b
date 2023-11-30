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

  const URL = `http://localhost:3001/rickandmorty`


  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function onSearch(id) {
    if (!id) alert("Ingresa por favor un ID");
    if (characters.find((char) => char.id === parseInt(id))) return alert(`Ya existe el personaje con ese id ${id}`);

    try {
      const {data} =  await axios.get(`${URL}/character/${id}`)

      setCharacters(oldChars => [...oldChars, data])
    } catch (error) {
      // console.log(error.response.data);
      alert(error.response.data);
    }
  }

  const onClose = (id) =>
    setCharacters(characters.filter((char) => char.id !== parseInt(id)));

  async function login(userData) {

    try {
      const { data } = await axios(`${URL}/login?email=${userData.email}&password=${userData.password}`)

      const { access } = data

      setAccess(access)
      access && navigate('/home')
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
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
