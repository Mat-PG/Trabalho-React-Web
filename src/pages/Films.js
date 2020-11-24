import React, { useState, useLayoutEffect } from 'react';
import "../assets/css/main.css"
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import axios from 'axios';

function Films() {

  const [films, setFilms] = useState([])
  const [msg, setMsg] = useState("")

  const getFilms = () => {
    axios.get('https://swapi.dev/api/films/?')
      .then(retorno => {
        console.log(retorno)
        setFilms(retorno.data.results)
        setMsg("")
      }).catch(() => setMsg("Erro ao buscar dados!"))
  }
  
  useLayoutEffect(() => {

    getFilms();

  }, [])

  return (
    <>
      <Header />

      <Banner titulo="Films" mensagem="Here's a list of all trilogy movies" />

      <section id="three" className="wrapper special">
        <div className="inner">
          <div className="flex flex-2">
            {films.map((item, chave) =>
              <div key={chave}>
                <article>
                  <p></p>
                  <header>
                    <h3>{item.title}</h3>
                  </header>
                  <p></p><p> Episode : {item.episode_id}</p>
                  <p> Release at {item.release_date}</p>
                  <p></p><p> Director : {item.director}</p>
                  <p></p><p> Producer : {item.producer}</p>
                  Opening : <br/>
                  {item.opening_crawl}
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

export default Films;
