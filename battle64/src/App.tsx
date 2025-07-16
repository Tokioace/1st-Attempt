// React import removed as it's not needed in modern React
import { AppRouter } from '@router/AppRouter';
import '@styles/RetroStyles.css';
import '@styles/RetroStylesDark.css';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
