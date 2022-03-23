import "./style.css"

export default function Movie() {
    return (
        <section className="movie">
            <h1 className="movie__text">Selecione o horário</h1>
            <div className="movie__schedule">
                <div className="movie__section">
                    <span className="movie__section-date">Quinta-feira - 24/06/2021</span>
                    <div className="movie__buttons">
                        <button className="movie__section-button"> 15:00</button>
                        <button className="movie__section-button"> 19:00</button>
                    </div>
                </div>
                <div className="movie__section">
                    <span className="movie__section-date">Sexta-feira - 25/06/2021</span>
                    <div className="movie__buttons">
                        <button className="movie__section-button"> 15:00</button>
                        <button className="movie__section-button"> 19:00</button>
                    </div>
                </div>
            </div>
        </section>
    );
}