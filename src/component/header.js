import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';


export default (props) => {
    return <div>
        <Link to="/index">首页</Link> |
        <Link to="/about">关于</Link>
        {renderRoutes(props.routes[0].routes)}
    </div>
}