import './Crear_usuario.css';
import { useNavigate } from "react-router-dom";

const Crear_usuarioc = () => {
  const navigate = useNavigate();

  return (
    <div className="Contenedoru">
      <h1 className="Titulo">
        Registra un Usuario <br />
      </h1>

      <div className="Registro">
        <label style={{ justifyContent: 'center', display: 'flex', color:'white', fontSize:'24px', fontWeight:'bold',fontStyle:'italic' }}>
          Crear usuario
        </label>

        <input className='entradas' type="text" placeholder="Usuario" />
        <input className='entradas' type="password" placeholder="Contraseña" />
        <div className='divcheck'><input type="checkbox" /> Mostrar Contraseña</div>
        
        <button className='Boton_registrar'>Crear Usuario</button>

        {/* 🔑 ROUTER */}
        <button
          className='Boton_registrar'
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default Crear_usuarioc;