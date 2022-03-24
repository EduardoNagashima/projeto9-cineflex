import "./style.css"
import Footer from "./../Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Movie() {
    const { movieId } = useParams();
    const [movieSections, setMovieSections] = useState([]);
    const [days, setDays] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`).then((response) => {
            const { data } = response;
            setDays(data.days);
            setMovieSections(data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <section className="movie">
                <h1 className="movie__text">Selecione o horário</h1>
                <div className="movie__schedule">
                    {days.map(day => {
                        const { date, id, showtimes, weekday } = day;
                        return days && (
                            <div className="movie__section">
                                <span className="movie__section-date">{weekday} - {date}</span>
                                <div className="movie__buttons">
                                    {showtimes.map(el => {
                                        return <Link to={`/section/${el.id}`} >
                                            <button key={el.id} className="movie__section-button"> {el.name}</button>
                                        </Link>
                                    })}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </section>
            {movieSections && <Footer movie={movieSections} />}
        </>
    );
}