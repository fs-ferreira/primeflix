import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import GenericError from "./pages/GenericError";
import MyMovies from "./pages/MyMovies";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Movie />}></Route>
        <Route path="/favorites" element={<MyMovies />}></Route>
        <Route path="*" element={<GenericError />}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default RoutesApp;