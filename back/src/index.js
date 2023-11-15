const http = require("http"); //HTTP
const data = require("./utils/data");

http
  .createServer((req, res) => {
    const { url } = req;
    // console.log(url);
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (url.includes("/rickandmorty/character/")) {
      // console.log('estoy en la ruta');
      // res.end('estoy en la ruta')
      const id = url.split("/").at(-1);
    //   console.log(id);
      const character = data.find((char) => char.id === parseInt(id));
      //    console.log(character);
      if (character) {
        res.writeHead(200, { contentType: "application/json" });
        res.end(JSON.stringify(character));
      } else {
        res.writeHead(404, { "content-type": "application/json" });
        return res.end(JSON.stringify({ error: "Character not found, solo tenemos 5 personajes" }));
      }
    }
  })
  .listen(3001, "localhost");
