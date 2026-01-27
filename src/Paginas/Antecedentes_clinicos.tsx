
import React from 'react'
import { IoSearchCircleSharp } from "react-icons/io5";

export default function Antecedentes_clinicos() {
  return (
    <div className="Contenedor_datos">

      {/* FORMULARIO */}
      <div className="contenedor1">
        <form className="formulario_datos">

          <div className="campo">
            <label className="letras">Nombre</label>
            <select className="entradas">
               <option value="">Selecciona una opción</option>
               <option value="opcion1">Opción 1</option>
               <option value="opcion2">Opción 2</option>
               <option value="opcion3">Opción 3</option>
            </select>
            
          </div>

          <div className="campo">
            <label className="letras">Fecha</label>
            <input className="entradas" type="date" />
          </div>

          <div className="campo">
            <label className="letras">Familiares</label>
            <input className="entradas" type="text" />
          </div>

          <div className="campo">
            <label className="letras">Personales</label>
            <input className="entradas" type="text" />
          </div>

          <div className="campo">
            <label className="letras">Esta en tratamiento medico?</label>
            <label>
            <input type="radio" name="respuesta" value="si" />
            Sí
            </label>
            <label>
            <input type="radio" name="respuesta" value="no" />
            No
            </label>
          </div>

          <div className="campo">
            <label className="letras">Que tratamiento?</label>
            <input className="entradas" type="text" />
          </div>

          <div className="campo">
            <label className="letras">Toma medicamentos?</label>
            <label>
            <input type="radio" name="respuesta" value="si" />
            Sí
            </label>
            <label>
            <input type="radio" name="respuesta" value="no" />
            No
            </label>
          </div>

          <div className="campo">
            <label className="letras">Padece Alguna alergia?</label>
            <input className="entradas" type="text" />
          </div>

          <div className="campo">
            <label className="letras">Padece alguna enfermedad?</label>
            <label>
    <input type="checkbox" name="opciones" value="opcion1" />
    Del Corazon
  </label>
  <label>
    <input type="checkbox" name="opciones" value="opcion2" />
    Diabetes
  </label>
  <label>
    <input type="checkbox" name="opciones" value="opcion3" />
    OTROS
  </label>

  
          </div>

          <div className="campo">
            <label className="letras">Ha sido intervenido quirurgicamente?</label>
            <label>
            <input type="radio" name="respuesta" value="si" />
            Sí
            </label>
            <label>
            <input type="radio" name="respuesta" value="no" />
            No
            </label>
          </div>

          <div className="campo">
            <label className="letras">De que?</label>
            <input className="entradas" type="text" />
          </div>

          <div className="campo">
            <button className="boton-base boton">Guardar</button>
          <button className="boton-base boton-modificar">Editar</button>
          </div>

          

        </form>

       
      </div>

      {/* TABLA */}
      <div className="contenedor2">
        <div className='busqueda'>
          <label className='letras2'>BUSCAR PACIENTE:</label>
          <input className='entradas2' type="number" placeholder='Ingrese el Nombre'/>
          <button className='boton-buscar'><IoSearchCircleSharp size={24}/></button>

        </div>
        <table className="tabla-datos">
          <thead className='cabeceras'>
            <tr>
              <th className='cabeceras'>#</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Familiares</th>
              <th>Personales</th>
              <th>Tratamiento Medico</th>
              <th>Tipo Tratamiento</th>
              <th>Alergia</th>
              <th>Enfermendad</th>
              <th>Intervenido Quirurgicamente</th>
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