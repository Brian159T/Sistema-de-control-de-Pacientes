import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="Contenedor">

      <div className="bloqueTitulo">
        <h1 className="Titulo">
          Bienvenido al sistema <br />
          de control de Pacientes
        </h1>
      </div>

      <div className="inicioSesion">
        <label className="labelTitulo">
          Iniciar Sesión
        </label>

        <input className="entradas" type="text" placeholder="Usuario" />
        <input className="entradas" type="password" placeholder="Contraseña" />

        <div className="divcheck">
          <input type="checkbox" />
          Mostrar Contraseña
        </div>

        <button className="Boton_ingresar" onClick={() => navigate("/dashboard")}>Ingresar</button>
        <button className="Boton_ingresar" onClick={() => navigate("/crear-usuario")}>Crear Usuario</button>
      </div>

    </div>
  );
};

export default Login;