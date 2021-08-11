import React from 'react'
import {NavbarHeader} from './MyComponents/NavbarHeader'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import {Home} from './MyComponents/Home'
import history from './MyComponents/history'
import {Task} from './MyComponents/Task'
import {AddTask} from './MyComponents/AddTask'
import LoginForm from './MyComponents/LoginForm'
import {User} from './MyComponents/User'
import { NewPassword } from './MyComponents/NewPassword'
export const App = () => {
  return (
    <> 
    <BrowserRouter history={history}>
      <NavbarHeader/>
      <Switch>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Task" component={Task}/>
      <Route exact path="/AddTask" component={AddTask}/>
      <Route exact path="/User" component={User}/>
      <Route exact path="/NewPassword" component={NewPassword}/>
      </Switch>
    </BrowserRouter>
    </>
  )
}
export default App;