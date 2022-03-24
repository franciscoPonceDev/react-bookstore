import './Form.css';

const Form = () => (
  <div className="form-container">
    <h2 className="form-title">ADD BOOK</h2>
    <form>
      <input className="form-book-title" type="text" required placeholder="Title" />
      <div className="form-book-category">
        <select className="select" default name="category">
          <option value="">
            Category
          </option>
          <option value="Shonen">Shonen</option>
          <option value="Shojo">Shojo</option>
          <option value="Seinen">Seinen</option>
          <option value="Josei">Josei</option>
          <option value="Kodomomuke">Kodomomuke</option>
        </select>
      </div>
      <button className="add-btn" type="submit">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default Form;
