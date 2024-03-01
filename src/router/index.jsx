import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Signup from "../component/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Signup/>
    },
    {
        path: '/Login',
        element: <Login/>
    }
])
export default router;