import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './store'
import './index.css'

import Home from './pages/Home.jsx'
import EditCanvas from "./pages/question/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/editCanvas",
    element: <EditCanvas />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
