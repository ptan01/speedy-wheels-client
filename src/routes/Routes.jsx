import { createBrowserRouter } from "react-router-dom";
import Main from "../leyOut/Main";
import Home from "../pages/home/home/Home";
import AddToys from "../pages/addToys/AddToys";

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
            }
        ]
    }
])

export default router ;