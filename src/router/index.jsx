import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { lazyLoad } from '../utils/lazyLoad';


const HomePage = lazyLoad(
    () => import(/* webpackChunkName: "Home" */ '../pages/home')
)

const AppRouter = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
        </Routes>
    </Router>
);

export default AppRouter;