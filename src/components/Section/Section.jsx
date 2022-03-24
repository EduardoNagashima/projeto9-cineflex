import "./style.css"

export default function Section() {
    const accenst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    return (
        <section className="section">
            <h1>Selecione o(s) assento(s)</h1>
            <div className="section__accents">
                {accenst.map(el => {
                    return (
                        <div className="section__accent">
                            {el}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}