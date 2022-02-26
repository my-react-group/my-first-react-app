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
        <hr />
        <div className="render-wrap">
            <Outlet />
        </div>
      </div>
    );
  }


  export default Layout;