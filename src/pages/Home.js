import React from 'react';
import "../assets/css/main.css"
import Head from "../components/Head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

function Home() {

  return (

    < >
      <Head />

      <Header />

      <Banner titulo="STAR WARS LOVED" mensagem="Um site para fans da franquia Star Wars, contendo inumeras informações sobre esse universo" />

      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Projeto StarWarsLoved</h2>
            <p></p>
            <p> Feito por Matheus Pereira Garbossa </p>
            <p> Email: matheusgarbossa@gmail.com </p>
            <p>RA: 1120451</p>
            <Link to="/Login">Login</Link>
          </header>
        </div>
      </section>


      <Footer />

    </>
  );
}

export default Home;
