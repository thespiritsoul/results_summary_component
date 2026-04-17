import "@/components/Componente.css"
import ContenedorResumen from "./ContenedorResumen"
import Resultado from "./Resultado"

const Componente = () => {
  return (
    <div className="tarjeta">
        <Resultado></Resultado>
        <ContenedorResumen></ContenedorResumen>
    </div>
  )
}

export default Componente