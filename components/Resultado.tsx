import "@/components/Resultado.css"
import Calificacion from "./Calificacion"

const Resultado = () => {
  return (
    <div className="ContenedorResultado">
        <h4>Your Result</h4>
        <Calificacion></Calificacion>
        <h2>Great</h2>
        <p className="descripcion">You scored higher than 65% of the people who have taken these tests.</p>
    </div>

  )
}

export default Resultado