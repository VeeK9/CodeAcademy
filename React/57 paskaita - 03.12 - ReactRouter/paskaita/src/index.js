import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserFormProvider } from './contexts/UserFormContext';
import { UserProvider } from './contexts/UserContext';
import { BrowserRouter } from "react-router-dom"
import { PlantsProvider } from './contexts/PlantsContext';
import { PlantFormProvider } from './contexts/PlantFormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserFormProvider>
      <UserProvider>
        <PlantsProvider>
          <PlantFormProvider>
            <App />
          </PlantFormProvider>
        </PlantsProvider>
      </UserProvider>
    </UserFormProvider>
  </BrowserRouter>
);
