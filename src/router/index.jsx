import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Signup from "../component/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/Signup',
        element: <Signup/>
    }
])
export default router;