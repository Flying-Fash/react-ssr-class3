import React from 'react';
import express from 'express';
import { StaticRouter,matchPath,Route } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
// import { renderRoutes } from 'react-router-config';
import routes from '../src/app';
import { getServerStore } from '../src/store/store';
import Header from "../src/component/header"

const store = getServerStore();
const app = express();
app.use(express.static("public"));

app.get("*",(req,res) => {

    const promises = [];
    routes.some(route => {
        const match = matchPath(req.path,route);
        if(match){
            const { loadData } = route.component;
            if(loadData){
                promises.push(loadData(store))
            }
        }
        // return match;
    })

    Promise.all(promises).then(() => {
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <Header routes={routes}></Header>
                    {/* {routes.map((route) => <Route {...route}></Route>)} */}
                    {/* {renderRoutes(routes)} */}
                </StaticRouter>
            </Provider>
        );
        res.send(`
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>react ssr</title>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>
                        window.__context = ${JSON.stringify(store.getState())}
                    </script>
                    <script src="/bundle.js"></script>
                </body>
            </html>
        `)
    }).catch(() => {
        res.send("报错页面");
    })
})

app.listen(8081,() => {
    console.log("服务已启动！")
})