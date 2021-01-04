import React from 'react'
import { Footer, Head, Nav, Slideshow } from '../../components'
import './style.css'


export default ({ children }) => {

    console.log('render Main')

    return (
        <div className="main-view">
            <Head />
            <div className="main-wrap">
                 <div className="slide">
                     <Slideshow className="img-sl" />
                 </div>
             </div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

// import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Footer, Head, Nav, Slideshow } from '../../components'
// import { Category, Home, Profile } from '../../pages/Main'
// import './style.css'

// const Main = () => {
//     return (
//         <BrowserRouter>
//         <div className="main-view">
//             <Head />
//             <div className="main-wrap">
//                 <div className="slide">
//                     <Slideshow className="img-sl" />
//                 </div>
//             </div>
//             <Nav />
//             <Switch>
//                 <Route path="/about">
//                     <Profile />
//                 </Route>
//                 <Route path="/kategori">
//                     <Category />
//                 </Route>
//                 <Route path="/">
//                     <Home />
//                 </Route>
//             </Switch>
//             <Footer />
//         </div>
//         </BrowserRouter>
//     )
// }

// export default Main
