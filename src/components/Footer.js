import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <div className="flex">
          <div className="copyright">
            &copy; Desenvolvido, por Matheus Pereira Garbossa, como trabalho avaliativo para a materia de Tópicos especiais em programação.
						</div>
          <ul className="icons">
            <li><Link to="facebook.com" className="icon fa-facebook"><span className="label">Facebook</span></Link></li>
            <li><Link to="twitter.com" className="icon fa-twitter"><span className="label">Twitter</span></Link></li>
            <li><Link to="linkedin.com" className="icon fa-linkedin"><span className="label">linkedIn</span></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )

}

export default Footer;