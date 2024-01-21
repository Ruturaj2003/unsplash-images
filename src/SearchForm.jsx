import { useState } from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const [searchVal, setSearchVal] = useState('');
  const { setSearchTerm, searchTerm } = useGlobalContext();
  console.log(import.meta.env.VITE_API_KEY);
  function handleSubmit(e) {
    e.preventDefault();
    if (!searchVal) return;
    setSearchTerm(searchVal);
    console.log(searchTerm);
    setSearchVal('');
  }
  return (
    <section>
      <h1 style={{ textAlign: 'center' }}>UnSplash Images</h1>
      <form className="search-form">
        <input
          id="subval"
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
