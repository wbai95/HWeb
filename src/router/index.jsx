import React from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { lazyLoad } from '../utils/lazyLoad';

const HomePage = lazyLoad(
    () => import(/* webpackChunkName: "Home" */ '../pages/home')
)

const AboutPage = lazyLoad(
    () => import(/* webpackChunkName: "Home" */ '../pages/about')
)

const ConnectUsPage = lazyLoad(
    () => import(/* webpackChunkName: "Home" */ '../pages/connect')
)

const AppRouter = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/connect" element={<ConnectUsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
);

export default AppRouter;