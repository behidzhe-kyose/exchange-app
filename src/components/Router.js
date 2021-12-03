import React from 'react';
import SearchBar from './pages/SearchBar';
import { Route, Switch, Router } from 'react-router-dom';
import ResultsPage from './pages/ResultsPage';
import ModalWindow from './pages/ModalWindow';
import Error404 from './pages/Error404';
import history from '../history';


const createRoutes = () => {
    return (
        <Router history={history}> 
            <SearchBar />
            <Switch>
            <Route path='/:cryptocurrency_pair' component={ResultsPage} />
            <Route path='/:cryptocurrency_pair/details' component={ModalWindow} />
                {/* <Route component={Error404} /> */}
            </Switch>
      </Router>
    )
}

export default createRoutes