import React from 'react'


function Banner(props) {
    return (
        <section id="banner">
          <h1>{props.titulo}</h1>
          <p>{props.mensagem}</p>
        </section>
    )

}

export default Banner;