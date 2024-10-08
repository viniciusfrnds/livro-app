import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions';

const FormularioLivro = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: Date.now(), title }; // Gerar ID único
    dispatch(addBook(newBook));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título do Livro"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormularioLivro;
