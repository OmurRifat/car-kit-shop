import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from '../../layouts/Main'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => await fetch('services.json')
            }
        ]
    }
])

export default router