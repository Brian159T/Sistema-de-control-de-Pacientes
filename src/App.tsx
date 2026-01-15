import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Paginas/Login';
import Crear_usuarioc from './Paginas/Crear_usuario';
import Dashboard from './Paginas/Dashboard_doc';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/crear-usuario" element={<Crear_usuarioc />} />

        {/* Dashboard (layout + subrutas) */}
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
