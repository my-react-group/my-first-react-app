
import Dd from '@/views/dd'
import Cd from '@/views/cc'
import Home from '@/views/index';

const routes = [
  {
    path: window.__MICRO_APP_BASE_ROUTE__ || '/',
    component: Home,
      children: [
        {
          path: '/bar/dd',
          name: 'ddd',
          component: Dd
        },
        {
          path: '/bar/cc',
          name: 'cc',
          component: Cd
        }
      ],
  }
  
]

export default routes