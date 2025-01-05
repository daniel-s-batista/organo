import SocialMedia from "../socialMedia";
import "./CustomFooter.css";

const CustomFooter = () => {
    return (
        <footer className="footer">
            <section>
                <div className="social-media">
                    <SocialMedia anchorHref="https://www.facebook.com" imageSrc="/images/fb.png" imageAlt="Facebook" />
                    <SocialMedia anchorHref="https://www.twitter.com" imageSrc="/images/tw.png" imageAlt="Twitter" />
                    <SocialMedia anchorHref="https://www.instagram.com" imageSrc="/images/ig.png" imageAlt="Instagram" />
                </div>
                <img src="/images/logo.png" alt="Logo" />
                <h6>Desenvolvido por Alura.</h6>
            </section>
        </footer>
    );
}

export default CustomFooter;
