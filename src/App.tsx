import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Paginas/Login';
import Crear_usuarioc from './Paginas/Crear_usuario';
import Dashboard from './Paginas/Dashboard_doc';
import Datos_personales from './Paginas/Datos_personales';
import Examen_dentario from './Paginas/Examen_dentario';
import Antecedentes_clinicos from './Paginas/Antecedentes_clinicos';
import Interconsulta from './Paginas/Interconsulta';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/crear-usuario" element={<Crear_usuarioc />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="datos" element={<Datos_personales />} />
          <Route path="examen" element={<Examen_dentario />} />
          <Route path="antecedentes" element={<Antecedentes_clinicos />} />
          <Route path="interconsulta" element={<Interconsulta />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;