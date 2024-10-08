import React from 'react';
import { useTheme } from '../context/ThemeContext';

const TemaToggle = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Alternar Tema</button>;
};

export default TemaToggle;
