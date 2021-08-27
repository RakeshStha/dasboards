
import './app.css'

import UserList from './component/UserList/UserList'
import Suscriber from './component/Suscriber/Suscriber'
import Dashboard from './component/Dashboard/Dashboard'
import Graph from './component/Graphs/Graph'
import Usergraph from './component/Graphs/UserGraph'
import Subscriptiongraph from './component/Graphs/SubscribeGraph'
import Error404 from './component/Error/Error'

import { Route, Switch } from 'react-router-dom';


import Navbar from './component/Navbar/Navbar';
import Footer from './component/Navbar/Footer';


function App() {
  return (
    <>
      <Navbar/> 
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/userlist" component={UserList}/> 
        <Route path="/suscriber" component={Suscriber}/>
        <Route path="/graph" component={Graph}/>
        <Route path="/usergraph" component={Usergraph}/>
        <Route path="/subscriptiongraph" component={Subscriptiongraph}/>
        <Route component={Error404}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
