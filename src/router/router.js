import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// import Home from 'pages/Home/Home';
// import Page1 from 'pages/Page1/Page1';
// import Counter from 'pages/Counter/Counter';
// import UserInfo from 'pages/UserInfo/UserInfo';

import Loadable from 'react-loadable';

const Loading = function () {
    return <div>Loading...</div>
};

// const LoadableComponet = (name) => Loadable.Map({
//     loader:{
//        Home:() => import('pages/Home/Home'),
//        Page1:() => import('pages/Page1/Page1'),
//        Counter:() => import('pages/Counter/Counter'),
//        UserInfo: () => import('pages/UserInfo/UserInfo'),
//     },
//     loading: Loading,
//     render(loaded, props) {
//         let Com = loaded[name]
//         return <Com.default {...props}/>
//     },
//     delay:1000,
// })
const createAsyncComp = path => Loadable({ 
    loader: () => import(`pages/${path}/${path}`), 
    loading: Loading
 })
// console.log(LoadableComponet);
const getRouter = () => (
    <Router>
        <div>
            <ul className="nav">
                <li className="nav-item"><Link to="/">首页</Link></li>
                <li className="nav-item"><Link to="/page1">Page1</Link></li>
                <li className="nav-item"><Link to="/counter">Counter</Link></li>
                <li className="nav-item"><Link to="/userinfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={createAsyncComp('Home')}/>
                <Route path="/page1" component={createAsyncComp('Page1')}/>
                <Route path="/counter" component={createAsyncComp('Counter')}/>
                <Route path="/userinfo" component={createAsyncComp('UserInfo')}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;