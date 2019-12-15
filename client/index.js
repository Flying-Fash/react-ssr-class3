import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { renderRoutes } from 'react-router-config';
import routes from '../src/App';
import {getClientStore} from '../src/store/store';
import Header from "../src/component/header"

const store = getClientStore();
class Page extends Component{
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter> 
                    <Header routes={routes}></Header>
                    {/* {routes.map((route) => <Route {...route}></Route>)} */}
                    {/* {renderRoutes(routes)} */}
                </BrowserRouter>            
            </Provider>
        )
    }
}

ReactDom.hydrate(<Page />,document.getElementById("root"))