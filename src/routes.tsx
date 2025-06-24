import { createHashRouter, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage';

export const routes = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Navigate to="/" replace />,
      },
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'tabs/:tabId?',
        element: <TabsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
