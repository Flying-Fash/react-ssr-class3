import React,{ Component } from 'react';
import { Route } from 'react-router-dom';
import Index from "./container/index";
import About from './container/about';
import User from './container/user';
import Header from './component/header';

// export default (
//     <div>
//         <Route path="/" exact component={Index}></Route>
//         <Route path="/about" exact component={About}></Route>
//     </div>
// );

export default [
    {
        path:'/',
        component:Header,
        // loadData:Index.loadData,
        // exact:true,
        key:'root',
        routes:[{
            path:'/index',
            component:Index,
            exact:true,
            key:'index',
        },{
            path:'/about',
            component:About,
            exact:true,
            key:'about',
        },
        {
            path:'/user',
            component:User,
            exact:true,
            key:'user',
        },],
    },
]