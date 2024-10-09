import './App.css';
import {HashRouter as BrowserRouter,Routes,Route} from 'react-router-dom';
import PaginationComponent from './components/PaginationComponent';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginationComponent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
