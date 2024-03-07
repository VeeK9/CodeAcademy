import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TableGamesProvider } from './contexts/TableGamesContext';
import { FormProvider } from './contexts/FormContext';
import { PageLoaderProvider } from './contexts/pageLoaderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TableGamesProvider>
    <PageLoaderProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </PageLoaderProvider>
  </TableGamesProvider>
);
