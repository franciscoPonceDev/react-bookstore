import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { genre, title, author } = props;

  return (
    <li className="book-card">
      <div className="book-header">
        <span className="book-header-category">{genre}</span>
        <h3 className="book-header-title">{title}</h3>
        <p className="book-header-author">{author}</p>
        <div className="book-header-buttons">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress" />
    </li>
  );
};

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
