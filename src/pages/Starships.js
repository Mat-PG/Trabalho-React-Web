import React, { useState, useLayoutEffect } from 'react';
import "../assets/css/main.css"
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import axios from 'axios';

function Starships() {
  const [starships, setStarships] = useState([])
  const [msg, setMsg] = useState("")

  const getStarships = () => {
    axios.get('https://swapi.dev/api/starships/')
      .then(retorno => {
        console.log(retorno)
        setStarships(retorno.data.results)
        setMsg("")
      }).catch(() => setMsg("Erro ao buscar dados!"))

  }
  useLayoutEffect(() => {

    getStarships();

  }, [])

  return (
    <>
      <Header />

      <Banner titulo="Starships" mensagem="Here's a list of all the starships of the trilogy" />

      <section id="one" className="wrapper">
        <div className="inner">
          <div className="flex flex-3">
            {starships.map((item, chave) =>
              <div key={chave}>
                <article>
                  <header>
                    <h3>{item.name}</h3>
                  </header>
                  <p></p><p> Model : {item.model}</p>
                  <p></p><p> Manufacturer : {item.manufacturer}</p>
                  <p></p><p> Cost in credits : {item.cost_in_credits}</p>
                  <p></p><p> Length : {item.length}</p>
                  <p></p><p> Max Atmosphering Speed : {item.max_atmosphering_speed}</p>
                  <p></p><p> Crew : {item.crew}</p>
                  <p></p><p> Passengers : {item.passengers}</p>
                  <p></p><p> Starship Class : {item.starship_class}</p>
                </article>
              </div>
            )}
          </div>
        </div>
      </section>
      {msg}

      <Footer />

    </>
  );
}

export default Starships;