import './App.scss';
import { NavLink, Route, Link , Switch} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Superadmin from './Pages/Superadmin/Sueradmin';
import Orders from './Pages/Orders/Orders';

function App() {
  return (
    <>



     <Switch>
        <Route exact path="/" component={Superadmin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/superadmin" component={Superadmin} />
    </Switch>
    </>
  );
}

export default App;
