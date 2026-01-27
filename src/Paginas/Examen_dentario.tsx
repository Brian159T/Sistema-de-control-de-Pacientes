import React from 'react'
import { IoSearchCircleSharp } from "react-icons/io5";

export default function Examen_dentario() {
  return (
    <div className="Contenedor_datos">

      {/* FORMULARIO */}
      <div className="contenedor1">
        <form className="formulario_datos">

          <div className="campo">
            <label className="letras">Fecha</label>
            <input className="entradas" type="date" />
          </div>

          <div className="campo">
            <label className="letras">Examen Dental</label>
            <input className="entradas" type="number" />
          </div>

          <div className="campo">
            <label className="letras">Diagnostico</label>
            <input className="entradas" type="text" />
          </div>

          <div className="campo">
            <label className="letras">Presupuesto</label>
            <input className="entradas" type="float" />
          </div>

          <div className="campo">
            <label className="letras">A Cuenta</label>
            <input className="entradas" type="number" />
          </div>

          <div className="campo">
            <label className="letras">Saldo</label>
            <input className="entradas" type="float" />
          </div>

          <div className="campo">
            <label className="letras">Nombre</label>
            <select className="entradas">
               <option value="">Selecciona una opción</option>
               <option value="opcion1">Opción 1</option>
               <option value="opcion2">Opción 2</option>
               <option value="opcion3">Opción 3</option>
            </select>
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
              <th>NOMBRE</th>
              <th>FECHA</th>
              <th>EXAMEN DENTAL</th>
              <th>DIAGNOSTICO</th>
              <th>PRESUPUESTO</th>
              <th>A CUENTA</th>
              <th>SALDO</th>
              <th>ACCIONES</th>
              
              
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td><td>—</td><td>—</td><td>—</td><td>—</td>
              <td>—</td><td>—</td><td></td><td><button className="boton-base2 boton-eliminar2">Eliminar</button></td>
            </tr>
            <tr>
              <td>2</td><td>—</td><td>—</td><td>—</td><td>—</td>
              <td>—</td><td>—</td><td></td><td><button className="boton-base2 boton-eliminar2">Eliminar</button></td>
            </tr>
            <tr>
              <td>3</td><td>—</td><td>—</td><td>—</td><td>—</td>
              <td>—</td><td>—</td><td></td><td><button className="boton-base2 boton-eliminar2">Eliminar</button></td>
            </tr>
            
           
          </tbody>
        </table>
      </div>

    </div>
  );
}

