import React from 'react'
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router'

/* containers */
import AppContainer from './containers/App'
import Packages from './containers/Packages'
import ProductDetail from './containers/ProductDetail'
import Pkg from './containers/Pkg'


const routes = (
  <Route path='/' component={AppContainer}>
    <IndexRedirect to='/productdetail' />
    <Route path='/productdetail' component={ProductDetail} />
  </Route>
)

export default routes
