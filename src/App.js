import { Home } from './pages/Home';
import { GlobalStyle } from './styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Series } from './pages/Series';
import { Player } from './pages/Player';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/series/:series">
              <Series />
            </Route>
            <Route exact path="/series/:series/:season/:episode">
              <Player />
            </Route>
            <Route exact path="/movie/:movie">
              <Player />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
