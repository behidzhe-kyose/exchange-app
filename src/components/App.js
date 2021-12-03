
import React from 'react';
import '../assets/scss/app.scss';
import { Container } from "semantic-ui-react";
import createRoutes from './Router';

const routes = createRoutes();

const App = () => {
  return (
    <Container className="app">
      {routes}
    </Container>
  )
};

export default App;