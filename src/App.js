import React from 'react';
import FormularioLivro from './components/FormularioLivro';
import ListaLivros from './components/ListaLivros';
import TemaToggle from './components/TemaToggle';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="container">
        <h1>Lista de Livros</h1>
        <TemaToggle />
        <FormularioLivro />
        <ListaLivros />
      </div>
    </div>
  );
};

export default App;
