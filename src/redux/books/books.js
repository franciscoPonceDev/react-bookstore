const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appID = 'fdMNYF46V8PIudYJJyEs';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const addBookToAPI = (newBook) => async (dispatch) => {
  dispatch(addBook(newBook));
  await fetch(`${baseURL}/apps/${appID}/books`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: newBook.item_id,
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    }),
    headers: { 'Content-type': 'application/JSON' },
  });
};

export const getBooksFromAPI = () => async (dispatch) => {
  await fetch(`${baseURL}/apps/${appID}/books`)
    .then((response) => response.json())
    .then((bookList) => {
      const arrangedList = Object.entries(bookList).map(([key, value]) => ({
        item_id: key,
        title: value[0].title,
        author: value[0].author,
        category: value[0].category,
      }));
      if (arrangedList) {
        dispatch(addBook(arrangedList));
      }
    });
};

export const removeBookFromAPI = (itemId) => async (dispatch) => {
  dispatch(removeBook(itemId));
  await fetch(`${baseURL}/apps/${appID}/books/${itemId}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: itemId }),
    headers: { 'Content-type': 'application/JSON' },
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      }
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
