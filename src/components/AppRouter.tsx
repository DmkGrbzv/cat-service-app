import React from 'react';
import { Route, Routes } from "react-router-dom";
import {routesPath, defaultRoute} from '../router/index.js';

 
export default function AppRouter() {
  return (
    <Routes>
        {routesPath.map((route:any)=>
          <Route path={route.path} element={route.element} key={route.path}></Route>
        )}
      <Route path={defaultRoute.path} element={defaultRoute.element} />
    </Routes>
)
}
