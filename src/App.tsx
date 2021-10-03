import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Route path={''} exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
