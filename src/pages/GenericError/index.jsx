import { Link } from "react-router-dom";

function GenericError(){ 
  return(
    <div className="w-full flex flex-col gap-3 items-center justify-center h-[calc(100vh-64px)]">
      <h1 className="font-semibold text-9xl">404</h1>
      <h2 className="text-xl">Página não encontrada</h2>
      <Link to='/' className="text-sky-400 hover:text-sky-200">Voltar para página inicial</Link>
    </div>
  )

}

export default GenericError;