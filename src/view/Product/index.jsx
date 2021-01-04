import React from 'react'
import { Footer, Head, Nav } from '../../components'
// import './style.css'


export default ({ children }) => {

    console.log('render Product')

    return (
        <div>
            <Head />
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

// import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Footer, Head } from '../../components'
// import { ByCategory, Detail } from '../../pages'

// const Product = () => {
//     return (
//         <div className="main-view">
//             <Head />
//         <BrowserRouter>
//             <Switch>
//                 <Route path="/produk/kategori">
//                     <ByCategory />
//                 </Route>
//                 <Route path="/produk/detail">
//                     <Detail />
//                 </Route>
//             </Switch>
//             <Footer />
//         </BrowserRouter>
//         </div>
//     )
// }

// export default Product
