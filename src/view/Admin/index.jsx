import React from 'react'
import { NavbarAdmin } from '../../components'


export default ({children}) => {

    console.log('render Main Admin')

    return (
        <div>
            <NavbarAdmin />
            {children}
        </div>
    )
}



// import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { NavbarAdmin } from '../../components/molecules'
// import { Login, Post, Register } from '../../pages'

// const Admin = () => {
//     return (
//         <BrowserRouter>
//             <NavbarAdmin />
//             <Switch>
//                 <Route path='/admin/login'>
//                     <Login />
//                 </Route>
//                 <Route path='/admin/register'>
//                     <Register />
//                 </Route>
//                 <Route path='/'>
//                     <Post />
//                 </Route>
//             </Switch>
//         </BrowserRouter>
//     )
// }

// export default Admin
