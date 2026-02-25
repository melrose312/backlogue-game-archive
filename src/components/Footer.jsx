import Backlog from "../assets/backlogue-logo.png";

function Footer() {
    return (
        <footer className="footer__container">
            <div className="row">
                <div className="footer__logo">
                    <img src={Backlog} className="footer__logo--image" alt="" />
                    <div className="footer__logo--title">
                        Backlogue Game Archive
                        <p className="footer__logo--copyright">
                            Melody Gonzales &copy; 2026
                        </p>
                        <div className="footer__link">
                            <a href="https://rawg.io" target="_blank">
                                Powered by RAWG API
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
