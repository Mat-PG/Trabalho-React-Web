import React from 'react';
import "../assets/css/main.css"
import Head from "../components/Head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Home() {
  return (
    < >
      <Head />

      <Header />

      <Banner titulo="STAR WARS LOVED" mensagem="Um site para fans da franquia Star Wars, contendo inumeras informações sobre esse universo" />

      <section id="three" class="wrapper special">
        <div class="inner">
          <header class="align-center">
            <h2>Projeto StarWarsLoved</h2>
            <p></p>
            <p> Feito por Matheus Pereira Garbossa </p>
            <p> Email: matheusgarbossa@gmail.com </p>
            <p>RA: 1120451</p>
          </header>
        </div>
      </section>


      <Footer />

    </>
  );
}

export default Home;
