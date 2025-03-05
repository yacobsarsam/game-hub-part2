import Layout from "@/pages/Layout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import {createBrowserRouter} from "react-router-dom";
import GameDetailPage from "@/pages/GameDetailPage.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement:<ErrorPage/>,
        element: <Layout/>,
        children:[
            {index:true,element:<HomePage />},
            {path:'games/:id', element: <GameDetailPage/>}
        ]
    }
])
export default router;