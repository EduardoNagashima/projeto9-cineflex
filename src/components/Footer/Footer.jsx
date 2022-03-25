import "./style.css";

export default function Footer({ movie }) {
    const { title, posterURL } = movie;
    return (
        <footer>
            <div className="footer__movie">
                <div className="footer__movie-banner">
                    <img src={posterURL} alt={title} />
                </div>
                <span className="footer__movie-tittle">{title}</span>
            </div>
        </footer>
    );
}