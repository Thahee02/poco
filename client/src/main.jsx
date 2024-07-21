import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LayoutPage from './layout/layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
