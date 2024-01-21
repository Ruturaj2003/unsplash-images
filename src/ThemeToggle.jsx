import { useGlobalContext } from './context';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className="dota"></BsFillSunFill>
        ) : (
          <BsFillMoonFill className="dota-moon"></BsFillMoonFill>
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
