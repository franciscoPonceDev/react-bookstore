import { createSlice } from "@reduxjs/toolkit/";

const booksSlice = createSlice({
  name: "books",
  initialState: [
    { id: 1, title: 'One Piece', author: 'Eiichiro Oda', genre: 'Shonen' },
    { id: 2, title: 'One Piece2', author: 'Eiichiro Oda2', genre: 'Shonen' },
  ],
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: Date.now(),
        title: action.payload.title,
        author: action.payload.author,
        genre: action.payload.genre
      };
      state.push(newBook);
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload.id);
    }
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

// // Define constants
// const ADD_BOOK = 'ADD_BOOK';
// const REMOVE_BOOK = 'REMOVE BOOK';

// // Set initial state
// let id = 0

// // define reducer
// const bookReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_BOOK:
//       return [
//         ...state,
//         {
//           id: action.id,
//           title: action.title,
//           genre: action.genre,
//           author: action.author
//         }
//       ];
//       default:
//         return state;
//   }
// }

// // Define action creators
// const addAction = () = {
//   return {
//     type: ADD_BOOK,
//     id: 'id++',
//     title: 'title',
//     genre: 'genre',
//     author: 'author'
//   };
// };

// const removeAction = () = {
//   return {
//     type: REMOVE_BOOK
//   };
// };

// export default bookReducer;