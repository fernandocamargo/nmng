import React from 'react';
import { Provider as StateManager } from 'react-redux';
import { PersistGate as StatePersistence } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ThemeProvider as Theming } from 'styled-components';

import { App, Style } from 'components';
import { Loader } from 'components/widgets';

import { useRoot } from './hooks';

export default () => {
  const { history, persistor, store, theme } = useRoot();

  return (
    <StateManager store={store}>
      <StatePersistence persistor={persistor} loading={<Loader />}>
        <Router history={history}>
          <Theming theme={theme}>
            <Style />
            <App />
          </Theming>
        </Router>
      </StatePersistence>
    </StateManager>
  );
};
