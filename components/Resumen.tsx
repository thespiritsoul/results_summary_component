import "@/components/Resumen.css"

/**
 * 
 * Reaction Rojo
 * Memory Amarillo
 * Verbal Verde
 * Visual Azul
 */
const urlInicio = "icon-"
const urlFin = ".svg"

const Resumen = ({ icono,textIcono,resultado,color }
    : { icono: string;
        textIcono: string;
        resultado: string;
        color: string }) => {
  return (
    <div className={`resumen ${color}`}>
        <div className="izq">
            <img src={urlInicio+icono+urlFin} alt={textIcono} className="icono"/>
            {textIcono}
        </div>
        <div className="der">
            <div className="resultadoContenedor"><div className="resultado">{resultado}</div>/ 100</div>
        </div>
    </div>
  )
}

export default Resumen