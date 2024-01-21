import { useState } from 'react';

const SearchForm = () => {
  const [searchVal, setSearchVal] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    const data = e.target;
    if (!data) return;
    setSearchVal('');
  }
  return (
    <section>
      <h1 style={{ textAlign: 'center' }}>UnSplash Images</h1>
      <form className="search-form">
        <input
          type="text"
          name="search"
          placeholder="car"
          className="from-input search-input"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
