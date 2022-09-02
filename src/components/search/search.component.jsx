const Search = ({ submitHandler, changeHandler, search }) => {
  return (
    <form onSubmit={submitHandler}>
      <div className="field has-addons ">
        <p class="control">
          <a class="button is-static">Location</a>
        </p>

        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="ex. Vancouver"
            onChange={changeHandler}
            name="search"
            value={search}
            required
          />
        </div>

        <div className="control">
          <button type="submit" className="button is-link">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
