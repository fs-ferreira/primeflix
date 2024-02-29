import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

function MyMovies() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const storageList = localStorage.getItem("@primeflix")

    setMovies(JSON.parse(storageList) || [])

  }, [])

  function handleDelete(id) {
    const filteredList = movies.filter(item => item.id !== id);
    setMovies(filteredList);
    localStorage.setItem("@primeflix", JSON.stringify(filteredList));
    toast.success("Filme removido com sucesso!")
  }

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-10 flex flex-col gap-5">
      <h1 className="font-bold text-3xl">Filmes Favoritos</h1>

      {!movies.length && <span className="font-medium text-lg animate-pulse">Não existem filmes salvos até o momento...</span> }
      <ul className="space-y-3">
        {movies.map(item => {
          return (
            <li key={item.id} className="flex justify-between items-center">
              <span className="text-lg">{item.title}</span>
              <div className="space-x-2">
                <Link className="bg-zinc-800 p-3 rounded-md transition-all hover:bg-zinc-700" to={`/movie/${item.id}`}>Detalhes</Link>
                <button
                  className="bg-zinc-800 p-3 rounded-md transition-all hover:bg-red-600/60"
                  onClick={() => handleDelete(item.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          )
        })

        }
      </ul>
    </div>
  )

}

export default MyMovies;