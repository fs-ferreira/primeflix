import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header className="w-full bg-zinc-950 p-3 flex items-center justify-between h-16">
      <Link className="font-bold text-2xl hover:text-slate-400 transition-all flex items-center gap-2 hover:scale-105" to="/">
        <img src={logo} alt="logo" className="size-9" />
        Primeflix
        </Link>
      <Link className="ring-blue-100 rounded-sm px-3 py-2 font-medium text-xl hover:ring-[1px] hover:scale-105 transition-all mr-3" to="/favorites">Meus filmes</Link>
    </header>
  )
}

export default Header;