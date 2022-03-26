import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies").then((response) => {
            const { data } = response;
            setMovies(data);
        }).catch((err) => { console.log(err) })
    }, []);

    return (
        <section className="home">
            <span className="home__text">Selecione o filme</span>
            <div className="home__movies">
                {movies.map(({ id, posterURL, tittle }) => {
                    return <Link to={`/movie/${id}`}>
                        <div key={id + tittle} className="home__movie-folder">
                            <img key={id} src={posterURL} alt={tittle} />
                        </div>
                    </Link>
                })}
            </div>
        </section>
    );
}