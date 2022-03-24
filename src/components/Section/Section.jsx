import "./style.css"
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./../Footer/Footer";

export default function Section() {

    const [seats, setSeats] = useState([]);
    const [movieSections, setMovieSections] = useState([]);
    const { sectionId } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sectionId}/seats`).then((response) => {
            const { data } = response;
            setMovieSections(data.movie);
            setSeats(data.seats);
        })
    }, []);

    return (
        <>
            <section className="section">
                <h1>Selecione o(s) assento(s)</h1>
                <div className="section__seats">
                    {seats.map((seat, index) => {
                        const { id, isAvailable } = seat;
                        const css = isAvailable ? "section__seat" : "section__seat--occupied"

                        return <div className={css} onClick={isAvailable ? () => { css += ' selected' } : () => { }}>
                            {index + 1}
                        </div>
                    })}
                </div>
                <div className="section__notes">
                    <div>
                        <div className="section__note selected" />
                        <span>Selecionado</span>
                    </div>
                    <div>
                        <div className="section__note" />
                        <span>Disponível</span>
                    </div>
                    <div>
                        <div className="section__note unavailable" />
                        <span>Indisponível</span>
                    </div>
                </div>
                <div className="section__input">
                    <div className="section__input-name">
                        <p>Nome do comprador:</p>
                        <input type="text" placeholder="Digite seu nome..." />
                    </div>
                    <div className="section__input-document">
                        <p>CPF do comprador:</p>
                        <input type="text" placeholder="Digite seu CPF..." />
                    </div>
                </div>
                <div className="section__button">
                    <button>Reservar assentos(s)</button>
                </div>
            </section>
            {movieSections && <Footer movie={movieSections} />}
        </>
    );
}