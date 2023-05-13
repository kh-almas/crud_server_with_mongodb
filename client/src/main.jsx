import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import AddUser from "./component/AddUser.jsx";
import AllUser from "./component/AllUser.jsx";
import EditUser from "./component/EditUser.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: '/',
                element: <AllUser />
            },
            {
                path: '/create-user',
                element: <AddUser />
            },
            {
                path: '/update-user/:id',
                element: <EditUser />,
                loader: ({params}) => fetch(`http://localhost:4000/user/${params.id}`)
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
