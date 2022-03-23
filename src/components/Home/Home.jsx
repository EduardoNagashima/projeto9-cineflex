import "./style.css";
import { Link } from "react-router-dom";

export default function Home() {
    const movies = [{ img: "https://html.com/wp-content/uploads/flamingo.webp", alt: 'flamingo' }]

    return (
        <section className="home">
            <span className="home__text">Selecione o filme</span>
            <div className="home__movies">
                {movies.map((movie, index) => {
                    return (
                        <Link to={"/movie"}>
                            <div className="movie-folder">
                                <img key={movie.alt + index} src={movie.img} alt={movie.alt} />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}