import { Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import ResponsePage from './pages/ResponsePage';

function App() {
  return (
    <div>
      <h1>QuickForms</h1>
      <form>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default App;