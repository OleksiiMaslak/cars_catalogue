import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from './screens/home/Home'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<div>EROR 404</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;