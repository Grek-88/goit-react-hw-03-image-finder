import s from "../Searchbar/Searchbar.module.css";

export default function Searchbar(props) {
  function inputQuery(ev) {
    ev.preventDefault();
    if (ev.target[1].value.trim() === "") {
      alert("Для поиска необходимо ввести слово");
      return;
    }
    props.onSubmit(ev.target[1].value.toLowerCase());
    ev.target[1].value = "";
  }

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={inputQuery}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
