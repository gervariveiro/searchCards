import './assets/App.css';
import Searcher from './pages/searcher';
import { BrowserRouter, Route,Routes } from "react-router-dom";

function App() {



//console.log(searchText) console log para controlar lo escrito en el input.

  return (
  <div className='App'>
    <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Searcher/>} />
          </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;