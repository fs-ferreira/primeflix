import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { toast } from 'sonner'

function Movie() {

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true)
  const navigation = useNavigate();

  useEffect(() => {
    async function loadMovie() {
      api.get(`movie/${id}`, {
        params: {
          api_key: 'ec03db76262c9408b4020a4a6b7965c2',
          language: 'pt-br'
        }
      })
        .then((response) => {
          setMovie(response.data)
          setLoading(false)
        })
        .catch(() => {
          navigation('/', { replace: true })
          return;
        })
    }

    loadMovie()

    return () => {

    }
  }, [navigation, id])

  function handleSaveMovie() {
    const storageList = localStorage.getItem("@primeflix");

    let favMovies = JSON.parse(storageList) || [];

    const hasMovieAlreadySaved = favMovies.some(item => item.id === movie.id)

    if (hasMovieAlreadySaved) {
      toast.warning("Este filme já foi salvo em sua lista!")
      return;
    }

    favMovies.push(movie);
    localStorage.setItem("@primeflix", JSON.stringify(favMovies));
    toast.success("Filme salvo com sucesso!")

  }

  if (loading) {
    return (
      <div className="w-full flex flex-1 items-center justify-center h-[calc(100vh-64px)]">
        <h2 className="font-medium animate-pulse uppercase text-2xl">Carregando detalhes... Aguarde um momento.</h2>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-10 flex justify-center items-center">
      <article
        key={movie.id}
        className="flex flex-col items-center text-center gap-4 w-4/5"
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          className="max-w-full md:max-w-[720px] rounded-md object-cover shadow-lg shadow-zinc-950"
        />
        <strong className="text-2xl">{movie.title.toUpperCase()}</strong>
        <p className="font-normal text-center w-full md:text-lg mb-3">{movie.overview}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
          <div className="flex flex-col gap-2 bg-zinc-800 p-3 rounded-full">
            <strong>Duração</strong>
            <span> {movie.runtime} min</span>
          </div>
          <div className="flex flex-col gap-2 bg-zinc-800 p-3 rounded-full">
            <strong>Avaliação</strong>
            <span> {movie.vote_average.toFixed(1)}/10</span>
          </div>
          <div className="flex flex-col gap-2 bg-zinc-800 p-3 rounded-full">
            <strong>Lançamento</strong>
            <span> {new Date(movie.release_date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex justify-center items-center w-full gap-5 mt-3">
          <a
            target="blank"
            rel="external"
            href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}
            className="transition-all ring-zinc-500 ring-2 py-2 px-4 w-2/3 rounded-md text-xl hover:bg-zinc-800 hover:cursor-pointer"
          >
            Trailer
          </a>
          <button
            onClick={handleSaveMovie}
            className="transition-all ring-zinc-500 ring-2 py-2 px-4 w-2/3 rounded-md text-xl hover:bg-zinc-800"
          >
            Salvar
          </button>
        </div>
      </article>
    </div>
  )
}

export default Movie;