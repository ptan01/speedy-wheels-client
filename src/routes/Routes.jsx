import { createBrowserRouter } from "react-router-dom";
import Main from "../leyOut/Main";
import Home from "../pages/home/home/Home";
import AddToys from "../pages/addToys/AddToys";
import Login from "../pages/login&reg/Login";
import Registration from "../pages/login&reg/Registration";
import AllToys from "../pages/allToys/AllToys";
import MyToys from "../pages/myToys/MyToys";
import Details from "../pages/Details/Details";
import Edit from "../pages/edit/Edit";
import PrivetRoute from "./PrivetRoute";
import Erorr from "../pages/error/Erorr";
import Blogs from "../pages/blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Erorr></Erorr>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-toys',
                element: <PrivetRoute><AddToys></AddToys></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'all-toys',
                element: <AllToys></AllToys>,
                loader: ()=> fetch('http://localhost:5000/toys')
            },
            {
                path: 'my-toys',
                element:<PrivetRoute><MyToys></MyToys></PrivetRoute>
            },
            {
                path: 'details/:id',
                element: <PrivetRoute><Details></Details></PrivetRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/single-toys/${params.id}`)
            },
            {
                path: 'edit/:id',
                element: <Edit></Edit>,
                loader: ({params})=> fetch(`http://localhost:5000/single-toys/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router ;