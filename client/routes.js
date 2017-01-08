import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';
import Admin from './components/Admin';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NoMatch from './components/NoMatch';
import Notes from './components/Notes'
import Contacts from './components/Contacts'
import Youtb from './components/Youtb'
import Dictation from './components/Dictation'
import Home from './components/Home'


const AdminAccess = UserAuthWrapper({
  authSelector: state => state.user,
  predicate: user => { return user.role === 'admin' },
  redirectAction: () => browserHistory.push("/"),
  wrapperDisplayName: 'UserIsAdmin'
})

const AdminRoutes = AdminAccess( (props) => props.children )

export default (
  <Route>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="signup" component={SignUp} />
      <Route path="signin" component={SignIn} />
      <Route component={AuthenticatedRoutes}>
        <Route path="dashboard" component={Dashboard} />
        <Route path="notes" component={Notes} />
        <Route path="contacts" component={Contacts} />
        <Route path="ytvoice" component={Youtb} />
        <Route path='dictation' component={Dictation} />
        <Route component={AdminRoutes}>
          <Route path="/admin" component={Admin} />
          {/* PROTECTED BY ADMIN ACCESS */}
        </Route>
      </Route>
      <Route path="*" status={404} component={NoMatch}/>
    </Route>
  </Route>
)
