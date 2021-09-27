import { Home } from './pages/Home';
import { GlobalStyle } from './styles';
import { BrowserRouter, Route } from 'react-router-dom';
import { Season } from './pages/Season';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:series">
          <Season />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
