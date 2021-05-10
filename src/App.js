import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import HomePage from 'pages/Homepage';
import Footer from 'components/Footer';
import Header from 'components/Header';

import { theme, GlobalStyle, CircularProgressWrapper } from 'theme';

function App() {
  const { loading } = useSelector((state) => state?.storeData);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {loading && (
          <CircularProgressWrapper>
            <CircularProgress />
          </CircularProgressWrapper>
        )}
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
