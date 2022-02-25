import {
    Outlet,
    Link,
  } from "react-router-dom";
import Menu from './menu';
import './layout.css';

function Layout() {
    return (
      <div className="appWrap">
        < Menu />
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav> */}
        <hr />
        <div className="render-wrap">
            <Outlet />
        </div>
      </div>
    );
  }


  export default Layout;