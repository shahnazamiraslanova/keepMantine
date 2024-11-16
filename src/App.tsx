
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './app/routes/Routes'; // Adjust the import path if needed

function App() {
  return (
    <Router>
      <div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        <main>
          <AppRoutes /> 
        </main>
      </div>
    </Router>
  );
}

export default App;
