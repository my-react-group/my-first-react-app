import Home from '../pages/home';
import About from '../pages/about';

const routes = [
  {
    path: '/',
    name: '首页',
    element: <Home />,
  }, {
    path: '/about',
    name: '详情页',
    element: <About/>
  }
];

export default routes