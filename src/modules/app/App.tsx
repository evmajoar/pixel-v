import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UiStateProvider} from "../../providers/useUiState";
import {routesConfig} from "../../settings/routing-config";


export function App() {
  return (
    <UiStateProvider>
    <BrowserRouter>
      <Routes>
        {routesConfig.map(r => (
          <Route key={r.title} path={r.slug} element={r.component} />
        ))}
      </Routes>
    </BrowserRouter>
    </UiStateProvider>
  );
}
