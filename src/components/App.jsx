import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./reset.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Movie from "./Movie/Movie";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";

export default function App() {
    const movie = <><Movie /><Footer /></>
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={movie} />
                <Route path="/section" element={<Section />} />
            </Routes>
        </BrowserRouter>
    );
}