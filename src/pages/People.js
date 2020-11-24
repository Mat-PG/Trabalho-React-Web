import React, { useState, useLayoutEffect } from 'react';
import "../assets/css/main.css"
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import axios from 'axios';

function People() {
  const [people, setPeople] = useState([]);
  const [msg, setMsg] = useState("")

  const getPeople = () => {
    axios.get('https://swapi.dev/api/people/?')
      .then(retorno => {
        console.log(retorno)
        setPeople(retorno.data.results)
        setMsg("")
      }).catch(() => setMsg("Erro ao buscar dados!"))

  }
  
  useLayoutEffect(() => {

    getPeople();

  }, [])
  return (
    <>
      <Header />

      <Banner titulo="People" mensagem="Here's a list of people in the trilogy" />

      <section id="one" className="wrapper">
        <div className="inner">
          <div className="flex flex-3">
            {people.map((item, chave) =>
              <div key={chave}>
                <article>
                  <header>
                    <h3>{item.name}</h3>
                  </header>
                  <p></p><p> Height : {item.height}cm</p>
                  <p></p><p> Hair Color : {item.hair_color}</p>
                  <p></p><p> Skin Color : {item.skin_color}</p>
                  <p></p><p> Eye Color : {item.eye_color}</p>
                  <p></p><p> Birth Year : {item.birth_year}</p>
                  <p></p><p> Gender : {item.gender}</p>
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

export default People;
