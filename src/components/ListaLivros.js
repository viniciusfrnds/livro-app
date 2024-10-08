import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/actions';

const ListaLivros = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          {book.title}
          <button onClick={() => dispatch(removeBook(book.id))}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaLivros;
