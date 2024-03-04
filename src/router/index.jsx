import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Signup from "../component/Signup";
import AuthGaurd from "../component/AuthGaurd";
import Profile from "../component/Profile";
// import Deshbord from "../component/Dashboard";
import Dashboard from "../component/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/Signup',
        element: <Signup/>
    },
    {
        path: '/Profile/',
        element: <AuthGaurd/>,
        children: [
            {
                path: '/Profile/',
                element: <Profile/>
            },
            {
                path:"/Profile/deshbord",
                element: <Dashboard/>
            }
        ]
    }
])
export default router;