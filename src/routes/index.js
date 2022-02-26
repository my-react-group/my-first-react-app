import Layout from '../pages/layout';
import Home from '../pages/home';
import Todo from '../pages/todo';

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
      }
    ]
  }
  
];

export default routes