import  { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routesConfig from './routeConfig';

function GetRoutes() {
  const element = useRoutes(routesConfig);
  return element
}


const RoutesView = () => {
    return (
      <Router>
        <GetRoutes />
      </Router>
    );
  };
  
  export default RoutesView;