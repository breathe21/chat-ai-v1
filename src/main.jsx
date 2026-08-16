import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import RootLayout from './layouts/RootLayout.jsx';
import { Provider } from 'react-redux';
import Home from './pages/Home.jsx'
import store from './redux/index.js';
import ChatDetail from './pages/ChatDetail.jsx';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/chat/info',
        element: <ChatDetail />
      },
      {
        path: '/chat/:id',
        element: <Home />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
