import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PlantsProvider } from './contexts/PlantsContext';
import { PlantFormProvider } from './contexts/PlantFormContext';
import { LogInProvider } from './contexts/LogInContext';
import { PageLoaderProvider } from './contexts/PageLoaderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PageLoaderProvider>
    <LogInProvider>
      <PlantFormProvider>
        <PlantsProvider>
          <App />
        </PlantsProvider>
      </PlantFormProvider>
    </LogInProvider>
  </PageLoaderProvider>
);
