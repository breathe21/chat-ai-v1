import { createBrowserRouter } from "react-router-dom";
import RootLayout from '../layouts/RootLayout.jsx';
import Home from '../pages/Home.jsx'
import ChatDetail from '../pages/ChatDetail.jsx';

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

export default router;