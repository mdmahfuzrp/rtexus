import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layout/MainPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            }
        ]
    }
])

export default router;