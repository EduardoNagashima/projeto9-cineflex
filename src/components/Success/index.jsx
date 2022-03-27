import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

export default function Success() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { buyer, movie, seats } = state;
    console.log(seats);
    return (
        <section className="success">
            <h1>Pedido feito com sucesso!</h1>
            <div>
                <span>Filme e sessão</span>
                <p>{movie.movie.title}</p>
                <p>{movie.day.date} {movie.name}</p>
            </div>
            <div>
                <span> Ingressos</span >
                {seats.map(el => <p>Assento {el}</p>)}
            </div>
            <div>
                <span>Comprador</span>
                <p>Nome: {buyer.name}</p>
                <p>CPF: {buyer.cpf}</p>
            </div>
            <button onClick={() => navigate("/")}>
                Voltar para home
            </button>
        </section>
    );
}