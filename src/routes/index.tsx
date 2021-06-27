import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginAdmin, LoginRegular, RegisterRoom } from '../pages/authentication'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login/admin" exact component={LoginAdmin} />
        <Route path="/login" exact component={LoginRegular} />
        <Route path="/register-room" exact component={RegisterRoom} />
      </Switch>
    </BrowserRouter>
  )
}