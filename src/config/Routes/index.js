import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//layout
import Main from '../../view/Main'
import Admin from '../../view/Admin'

// pages
import { ByCategory, Category, Detail, Home, Login, Post, Profile } from '../../pages'
import Product from '../../view/Product'




export default () => {

  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />

        <Route path='/admin/:path?' exact>
          <Admin>
            <Switch>
              <Route path='/admin' exact component={Post} />
              {/* <Route path='/admin/setting' component={Setting} /> */}
              <Route component={() => (<div>404 Main Admin</div>)} exact path='/admin/*' />
            </Switch>
          </Admin>
        </Route>

        <Route path='/produk/:path?' exact>
            <Product>
                <Switch>
                    {/* <Route path='/' exact component={Home} /> */}
                    <Route path='/produk/detail' component={Detail} />
                    <Route path='/produk/kategori' component={ByCategory} />
                    <Route component={() => (<div>404 Main</div>)} exact path="/*" />
                </Switch>
            </Product>
        </Route>
        
        <Route>
          <Main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={Profile} />
              <Route path='/kategori' component={Category} />
              <Route component={() => (<div>404 Main</div>)} exact path="/*" />
            </Switch>
          </Main>
        </Route>

      </Switch>
    </Router>
  )

}



// import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Admin, Main, Product } from '../../view'

// const Routes = () => {
//     return (
//         <BrowserRouter>
//         <Switch>
//             <Route path = "/admin">
//                 <Admin />
//             </Route>
//             <Route path = "/produk">
//                 <Product />
//             </Route>
//             <Route path = "/">
//                 <Main />
//             </Route>
//         </Switch>

            
//         </BrowserRouter>
//     )
// }

// export default Routes
