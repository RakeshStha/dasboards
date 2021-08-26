import UserList from './component/UserList/UserList'
import Suscriber from './component/Suscriber/Suscriber'
import Dashboard from './component/Dashboard/Dashboard'
import Error404 from './component/Error/Error'

import { Route, Switch } from 'react-router-dom';


import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <>
    
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/userlist" component={UserList}/> 
        <Route path="/suscriber" component={Suscriber}/>
        <Route component={Error404}/>
      </Switch>
    </>
  );
}

export default App;
