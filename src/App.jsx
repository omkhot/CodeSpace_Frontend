import './App.css'
import { ThemeProvider } from './Contexts/ThemeContext';
import AppRouter from './Hooks/AppRouter'

function App() {
    return(
      <>
        <AppRouter />          
      </>
    )
}

export default App;
