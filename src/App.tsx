import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/home'
import GlobalStyle  from './theme/globalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route path={''} exact component={Home} />
      </BrowserRouter>
    </>
  );
}

export default App;
