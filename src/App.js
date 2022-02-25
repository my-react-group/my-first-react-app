import './App.css';
import 'antd/dist/antd.css';
import RoutesView from './routes/index'
import Menu from './pages/menu';

function App() {
  return (
    <div className="App">
        < Menu />
          <div className="render-wrap">
              <RoutesView />
          </div>
    </div>
  );
}

export default App;
