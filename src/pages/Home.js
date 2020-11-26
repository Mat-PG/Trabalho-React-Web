import React from 'react';
import "../assets/css/main.css"
import Head from "../components/Head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {

  return (

    < >
      <Head />

      <Header />

      <Banner titulo="BEM VINDO" />

      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>SkyPass</h2>
            <p></p>
            <p> Um site projetado para melhorar a sua experiencia astronomica </p>
            
            <p>Para ter acesso aos recursos é necessario estar logado</p>
            <p>Faça login <Link to="/Login"> aqui </Link> ou <Link to="/Login"> registre-se </Link> </p>
          </header>
        </div>
      </section>


      <Footer />

    </>
  );
}

export default Home;
