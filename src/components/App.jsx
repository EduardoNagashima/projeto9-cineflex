import "./reset.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Movie from "./Movie/Movie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";

export default function App() {
    const movie = <><Movie /><Footer /></>
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={movie} />
            </Routes>
        </BrowserRouter>
    );
}