import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '@/views/index';
import './App.css';
const history = createBrowserHistory();

function App() {
  // const history2 = useHistory();
  // const jump = () => {
  //   console.log(history2,  88888)
  //   history2.push('/dd')
  // };
  return (
    <>
    <Router history={history} basename="/bar">

     {/* <div onClick={jump}>ddddd</div> */}
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </>
  );
}

export default App;
