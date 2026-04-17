import "@/components/ContenedorResumen.css"
import Resumen from "@/components/Resumen"
import BotonContinuar from "./BotonContinuar"

const ContenedorResumen = () => {
  return (
    <div className="ContenedorResumen">
        <h3>Summary</h3>

        <Resumen 
        icono="reaction" 
        textIcono="Reaction" 
        resultado="80" 
        color="Rojo"></Resumen>
        <Resumen 
        icono="memory" 
        textIcono="Memory" 
        resultado="92" 
        color="Amarillo"></Resumen>
        <Resumen 
        icono="verbal" 
        textIcono="Verbal" 
        resultado="61" 
        color="Verde"></Resumen>
        <Resumen 
        icono="visual" 
        textIcono="Visual" 
        resultado="73" 
        color="Azul"></Resumen>

        <BotonContinuar></BotonContinuar>
    </div>
  )
}

export default ContenedorResumen