import React from "react";
import "./Footer.css";

function Footer() {
  return (
  <footer className="footer">
    <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
    <div className="footer__content">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__links">
            <li className="footer__link-item">
                <a href="#" className="footer__link" target="_blank">Яндекс.Практикум</a>
            </li>
            <li className="footer__link-item">
                <a href="#" className="footer__link" target="_blank">GitHub</a>
            </li>
            <li className="footer__link-item">
                <a href="#" className="footer__link" target="_blank">Facebook</a>
            </li>
        </ul>
    </div>

  </footer>);
}

export default Footer;
