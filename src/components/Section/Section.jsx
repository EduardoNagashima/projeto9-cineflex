import "./style.css"
import { useParams, useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./../Footer/Footer";

export default function Section() {

    const [seats, setSeats] = useState([]);
    const [movieSections, setMovieSections] = useState([]);
    const [selectedId, setSelectedId] = useState([]);
    const { sectionId } = useParams();
    const [loading, setLoading] = useState(true);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [info, setInfo] = useState({
        name: '',
        cpf: ''
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sectionId}/seats`).then((response) => {
            const { data } = response;
            setMovieSections(data);
            setSeats(data.seats);
            setLoading(false);
        }).catch((err) => console.log(err))
    }, []);

    function selected(seat, numChair) {
        if (selectedId.find(el => el === seat.id)) {
            const array = selectedId.filter(el => {
                if (seat.id !== el)
                    return el;
            });
            setSelectedId(array);
        } else {
            setSelectedId([...selectedId, seat.id]);
        }
        if (selectedSeats.find(el => el === numChair)) {
            const array = selectedSeats.filter(el => {
                if (numChair !== el) {
                    return el;
                }
            });
            setSelectedSeats(array);
        } else {
            setSelectedSeats([...selectedSeats, numChair])
        }
    }

    function sendInfo(e) {
        e.preventDefault();
        if (selectedId.length >= 1) {
            const obj = {
                ids: selectedId,
                name: info.name,
                cpf: info.cpf
            }
            axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", obj)
                .then(navigate('/success', { state: { buyer: obj, movie: movieSections, seats: selectedSeats } }))
                .catch(err => console.log(err));
        } else {
            alert('Selecione pelo menos um assento!');
        }
    }

    return (
        <>
            <section className="section">
                <h1>Selecione o(s) assento(s)</h1>
                <div className="section__seats">
                    {seats.map((seat, index) => {
                        const { id, isAvailable } = seat;
                        const numChair = index + 1

                        let css = isAvailable ? "section__seat" : "section__seat--occupied";

                        if (isAvailable && selectedId.find(el => el === id)) {
                            return <div
                                key={seat + index}
                                className={css + ' selected'}
                                onClick={() => selected(seat, numChair)}>
                                {numChair}
                            </div>
                        }

                        return <div
                            className={css}
                            onClick={() => { isAvailable ? selected(seat, numChair) : alert('Esse assento não está disponível!') }}>
                            {numChair}
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
                <form onSubmit={sendInfo}>
                    <label for="name">Nome do comprador:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Digite seu nome..."
                        onChange={e => setInfo({ ...info, name: e.target.value })}
                        value={info.name}
                        required
                    />
                    <label>CPF do comprador:</label>
                    <input
                        type="text"
                        name="cpf"
                        placeholder="Digite seu CPF..."
                        onChange={e => setInfo({ ...info, cpf: e.target.value })}
                        value={info.cpf}
                        required
                    />
                    <button type="submit">Reservar assentos(s)</button>
                </form>
            </section>
            {!loading && <Footer movie={movieSections.movie} />}
        </>
    );
}