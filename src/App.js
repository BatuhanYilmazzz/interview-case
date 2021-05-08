import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import HomePage from 'pages/Homepage';
import Footer from 'components/Footer';
import Header from 'components/Header';

import { theme, GlobalStyle } from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
