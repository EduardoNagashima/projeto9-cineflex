import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/";
import Home from "./Home/";
import Movie from "./Movie/";
import Section from "./Section/";
import Success from "./Success/";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:movieId" element={<Movie />} />
                <Route path="/section/:sectionId" element={<Section />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </BrowserRouter>
    );
}