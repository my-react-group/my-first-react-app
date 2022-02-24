import {useHistory, Route, Switch} from 'react-router-dom';
import routes from "@/router/routes"

export default function Home() {
  const history = useHistory();
  const jump = () => {
    history.push('/bar/dd')
  };
  const jump2 = () => {
    history.push('/bar/cc')
  };
  return <div>
    <div className="menuList" onClick={jump}>toDD</div>
    <div className="menuList" onClick={jump2}>toCC</div>
    <Switch>
        {
          routes.map(item => {
            return <Route path={item.path} exact component={item.component} key={item.name} />
          })
        }
      </Switch>
    </div>
}