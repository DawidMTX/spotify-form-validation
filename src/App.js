

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateAccount from './modules/HomeModule/interfaces/CreateAccount';
import ShowUser from './modules/HomeModule/interfaces/ShowLogedUser';
import HomePage from './modules/HomeModule/pages/HomePage/HomePage'
const App = () => {

  const routers = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: 'signup', element: <CreateAccount /> },
    { path: 'login', element: <ShowUser /> }
  ])

  return (
    <RouterProvider router={routers} />
  )
}


export default App;


