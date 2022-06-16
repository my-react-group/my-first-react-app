import Layout from '../pages/layout';
import Home from '../pages/home';
import Todo from '../pages/todo';
import Context from '../pages/Context';
import NotFound from '../pages/notfound';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        name: '首页',
        element: <Home />,
      }, {
        path: 'todo',
        name: '详情页',
        element: <Todo/>
      }, {
        path: 'context/:id',
        name: '练习context',
        element: <Context/>
      }
    ]
  }, {
    path: '*',
    element: <NotFound />,
  }
  
];

export default routes