import './App.css';
import 'antd/dist/antd.css';
import routesConfig from './routes';
import  { BrowserRouter as Router, useRoutes } from'react-router-dom';

function GetRoutes() {
  const element = useRoutes(routesConfig);
  return element
}

function App() {
  return (
      <Router>
        <GetRoutes />
      </Router>
  );
}

export default App;
