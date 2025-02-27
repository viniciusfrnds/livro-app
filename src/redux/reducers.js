const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter(book => book.id !== action.payload) };
    default:
      return state;
  }
};

export default bookReducer;
