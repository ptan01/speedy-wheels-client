import { createBrowserRouter } from "react-router-dom";
import Main from "../leyOut/Main";
import Home from "../pages/home/home/Home";
import AddToys from "../pages/addToys/AddToys";
import Login from "../pages/login&reg/Login";
import Registration from "../pages/login&reg/Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-toys',
                element: <AddToys></AddToys>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            }
        ]
    }
])

export default router ;