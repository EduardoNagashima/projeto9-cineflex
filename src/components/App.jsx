import "./reset.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Movie from "./Movie/Movie";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    );
}