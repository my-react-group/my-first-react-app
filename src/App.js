import { Switch, Route, Router } from 'react-router-dom';
import routes from './router/routes';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map(item => {
            return <Route path={item.path} component={item.component}></Route>
          })
        }
      </Switch>
    </Router>
  );
}

export default App;
