import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1, title: 'One Piece', author: 'Eiichiro Oda', genre: 'Shonen',
    },
  ];
  return books.map((book) => (
    <Book genre={book.genre} title={book.title} author={book.author} key={book.id} />
  ));
};

export default BookList;
