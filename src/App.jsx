import Gallery from './Gallery';
import SearchForm from './SearchForm';
import ThemeToggle from './ThemeToggle';

const App = () => {
  return (
    <>
      <h1>Unsplash Images Starter</h1>
      <ThemeToggle></ThemeToggle>
      <SearchForm></SearchForm>
      <Gallery></Gallery>
    </>
  );
};
export default App;
