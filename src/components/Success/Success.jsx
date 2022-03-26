import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Success() {
    const navigate = useNavigate();

    return (
        <section className="success">
            <h1>Pedido feito com sucesso!</h1>
            <div>
                <span>Filme e sessão</span>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>
            <div>
                <span> Ingressos</span >
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>
            <div>
                <span>Comprador</span>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </div>
            <button onClick={() => navigate("/")}>
                Voltar para home
            </button>
        </section>
    );
}