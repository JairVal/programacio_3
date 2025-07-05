import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import ListaInputs from './useId/ListaInputs';
import CampoTexto from './useId/CampoTexto';
import IndexUseState from './useStates/IndexUseState';
import FormularioRHF from './formulario/FormularioRHF';
import FormularioBasico from './formulario/FormularioBasico';
import FormularioZod from './formulario/FormularioZod';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/ListaInputs" element={<ListaInputs />} />
            <Route path="/CampoTexto" element={<CampoTexto />} />
            <Route path="/useState" element={<IndexUseState />} />
            <Route path="/FormularioBasico" element={<FormularioBasico />} />
            <Route path="/FormularioRHF" element={<FormularioRHF />} />
            <Route path="/FormularioZod" element={<FormularioZod />} />
        </Routes>
    );
}