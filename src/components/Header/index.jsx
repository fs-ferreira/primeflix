import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-zinc-950 p-3 flex items-center justify-between h-16">
      <Link className="font-bold text-2xl hover:text-slate-400 transition-all" to="/">Primeflix</Link>
      <Link className="ring-blue-100 rounded-sm px-3 py-2 font-medium text-xl hover:ring-[1px] hover:scale-105 transition-all mr-3" to="/favorites">Meus filmes</Link>
    </header>
  )
}

export default Header;