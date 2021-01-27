import React from 'react';
import './styles.css';


const Footer = () => {
    return (
        <footer id="gramado" className="container-fluid fixed-bottom">
            <div className="row justify-content-end p-3">
                <span id="roda" className="mr-4">CONTATO</span>

                <a href="#" className="mr-2 rounded-circle" target="_blank" id="email">
                    <i class="fas fa-envelope" />
                </a>

                <a href="https://www.youtube.com/channel/UCL_dBfBSWTD3PGhBTdJGQTg" className="mr-2 rounded-circle" target="_blank" id="youtube">
                    <i class="fab fa-youtube" />
                </a>

                <a href="https://www.facebook.com/eumeprotejobr/" className="mr-2 rounded-circle" target="_blank" id="facebook">
                    <i className="fab fa-facebook-f" />
                </a>

                <a href="https://www.instagram.com/eumeprotejobrasil/?hl=pt-br" className="mr-2 rounded-circle" target="_blank" id="instagram">
                    <i class="lni lni-instagram-filled" />
                </a>

                <a href="https://twitter.com/eumeprotejobr" className="mr-2 rounded-circle" target="_blank" id="twitter">
                    <i class="fab fa-twitter" />
                </a>
            </div>
        </footer>
    )
}
export default Footer;
