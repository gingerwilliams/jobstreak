import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LicenseManager } from "@ag-grid-enterprise/core";
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

// ModuleRegistry.registerModules([AllCommunityModule]);

import { ExcelExportModule } from 'ag-grid-enterprise'; 

ModuleRegistry.registerModules([ ExcelExportModule, ClientSideRowModelModule ]); 

const KEY = import.meta.env.VITE_AG_GRID_KEY

LicenseManager.setLicenseKey(KEY);

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


