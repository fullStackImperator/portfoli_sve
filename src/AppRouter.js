import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from 'containers/Home/Home'
import Header from 'containers/Header/Header';
import Projects from 'containers/Projects/Projects';
import AboutMe from 'containers/AboutMe/AboutMe';
import HelpPage from 'containers/HelpPage';
import NotFoundPage from 'containers/NotFoundPage';
import ReallySmoothScroll from 'really-smooth-scroll';
import { hot } from 'react-hot-loader';
import ScrollToTop from 'theme/ScrollToTop';
import { Background } from 'theme/globalStyle';

ReallySmoothScroll.shim();


const AppRouter = () => (
    <BrowserRouter>
            <ScrollToTop>
            <div>
                <Header />
                <Background />
                <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/aboutMe" component={AboutMe}/>
                    <Route path="/help" component={HelpPage}/>
                    <Route component={Home}/>
                </Switch>
            </div>
            </ScrollToTop>
    </BrowserRouter>
);

export default hot(module)(AppRouter);


