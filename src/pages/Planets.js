import React, { useState, useLayoutEffect } from 'react';
import "../assets/css/main.css"
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import axios from 'axios';

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [msg, setMsg] = useState("")

  const getPlanets = () => {
    axios.get('https://swapi.dev/api/planets/')
      .then(retorno => {
        console.log(retorno)
        setPlanets(retorno.data.results)
        setMsg("")
      }).catch(() => setMsg("Erro ao buscar dados!"))
  }

  useLayoutEffect(() => {

    getPlanets();

  }, [])

  return (
    <>
      <Header />

      <Banner titulo="Planets" mensagem="Here's a list of all the planets of the trilogy" />

      <section id="one" className="wrapper">
        <div className="inner">
          <div className="flex flex-3">
            {planets.map((item, chave) =>
              <div key={chave}>
                <article>
                  <header>
                    <h3>{item.name}</h3>
                  </header>
                  <p></p><p> Rotation Period : {item.rotation_period}</p>
                  <p></p><p> Orbital Period : {item.orbital_period}</p>
                  <p></p><p> Diameter : {item.diameter}</p>
                  <p></p><p> Climate : {item.climate}</p>
                  <p></p><p> Gravity : {item.gravity}</p>
                  <p></p><p> Terrain : {item.terrain}</p>
                  <p></p><p> Surface Water : {item.surface_water}</p>
                  <p></p><p> Population : {item.population}</p>
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

export default Planets;
