import { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
        >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};

export default ThemeToggle;