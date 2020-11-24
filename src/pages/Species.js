import React, { useState, useLayoutEffect } from 'react';
import "../assets/css/main.css"
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import axios from 'axios';

function Species() {
  const [species, setSpecies] = useState([]);
  const [msg, setMsg] = useState("")

  const getSpecies = () => {
    axios.get('https://swapi.dev/api/species/')
      .then(retorno => {
        console.log(retorno)
        setSpecies(retorno.data.results)
        setMsg("")
      }).catch(() => setMsg("Erro ao buscar dados!"))
 
  }

  useLayoutEffect(() => {

    getSpecies();

  }, [])
  
  return (
    <>
      <Header />

      <Banner titulo="Species" mensagem="Here's a list of all the species of the trilogy" />
      
      <section id="one" className="wrapper">
        <div className="inner">
          <div className="flex flex-3">
            {species.map((item, chave) =>
              <div key={chave}>
                <article>
                  <header>
                    <h3>{item.name}</h3>
                  </header>
                  <p></p><p> Classification : {item.classification}</p>
                  <p></p><p> Designation : {item.designation}</p>
                  <p></p><p> Average Height : {item.average_height}</p>
                  <p></p><p> Skin Colors : {item.skin_colors}</p>
                  <p></p><p> Hair_Colors : {item.hair_colors}</p>
                  <p></p><p> Eye Colors : {item.eye_colors}</p>
                  <p></p><p> Average Lifespan : {item.average_lifespan}</p>
                  <p></p><p> Language : {item.language}</p>
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

export default Species;
