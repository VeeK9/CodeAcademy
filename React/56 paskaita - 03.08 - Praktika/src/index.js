import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PlantsProvider } from './contexts/PlantsContext';
import { PlantFormProvider } from './contexts/PlantFormContext';
import { LogInProvider } from './contexts/LogInContext';
import { PageLoaderProvider } from './contexts/PageLoaderContext';
import { UsersProvider } from './contexts/UsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PageLoaderProvider>
    <LogInProvider>
      <UsersProvider>
        <PlantFormProvider>
          <PlantsProvider>
            <App />
          </PlantsProvider>
        </PlantFormProvider>
      </UsersProvider>
    </LogInProvider>
  </PageLoaderProvider>
);
