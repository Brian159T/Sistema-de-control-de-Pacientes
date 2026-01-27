import './Datos_personales.css';
import { IoSearchCircleSharp } from "react-icons/io5";

export default function Datos_personales() {
  return (
    <div className="Contenedor_datos">

      {/* FORMULARIO */}
      <div className="contenedor1">
        <form className="formulario_datos">

          <div className="campo">
            <label className="letras">Nombre y Apellidos</label>
            <input className="entradas" type="text" />
          </div>

          <div className="campo">
            <label className="letras">CI</label>
            <input className="entradas" type="number" />
          </div>

          <div className="campo">
            <label className="letras">Dirección</label>
            <input className="entradas" type="text" />
          </div>

          <div className="campo">
            <label className="letras">Estado Civil</label>
            <input className="entradas" type="text" />
          </div>

          <div className="campo">
            <label className="letras">Teléfono</label>
            <input className="entradas" type="number" />
          </div>

          <div className="campo">
            <label className="letras">Fecha de Nacimiento</label>
            <input className="entradas" type="date" />
          </div>

          <div className="campo">
            <label className="letras">Celular</label>
            <input className="entradas" type="number" />
          </div>

          <div className="campo">
            <label className="letras">Dirección Laboral</label>
            <input className="entradas" type="text" />
          </div>

          <div className="campo">
            <label className="letras">Teléfono Laboral</label>
            <input className="entradas" type="number" />
          </div>

          <div className="campo">
            <label className="letras">Ocupación</label>
            <input className="entradas" type="text" />
          </div>

          <div className="campo">
            <label className="letras">Nacionalidad</label>
            <input className="entradas" type="text" />
          </div>

        </form>

        {/* BOTONES */}
        <div className="botones">
          <button className="boton-base boton">Guardar</button>
          <button className="boton-base boton-modificar">Editar</button>
          
        </div>
      </div>

      {/* TABLA */}
      <div className="contenedor2">
        <div className='busqueda'>
          <label className='letras2'>BUSCAR PACIENTE:</label>
          <input className='entradas2' type="number" placeholder='Ingrese el CI'/>
          <button className='boton-buscar'><IoSearchCircleSharp size={24}/></button>

        </div>
        <table className="tabla-datos">
          <thead className='cabeceras'>
            <tr>
              <th className='cabeceras'>#</th>
              <th>Nombre</th>
              <th>CI</th>
              <th>Dirección</th>
              <th>Estado Civil</th>
              <th>Teléfono</th>
              <th>Celular</th>
              <th>Fecha Nac.</th>
              <th>Ocupación</th>
              <th>Nacionalidad</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td><td>—</td><td>—</td><td>—</td><td>—</td>
              <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td><button className="boton-base2 boton-eliminar2">Eliminar</button></td>
            </tr>
            <tr>
              <td>2</td><td>—</td><td>—</td><td>—</td><td>—</td>
              <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td><button className="boton-base2 boton-eliminar2">Eliminar</button></td>
            </tr>
            <tr>
              <td>3</td><td>—</td><td>—</td><td>—</td><td>—</td>
              <td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td><button className="boton-base2 boton-eliminar2">Eliminar</button></td>
            </tr>
            
           
          </tbody>
        </table>
      </div>

    </div>
  );
}
