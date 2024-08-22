import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ErrorPage from "../components/ErrorPage";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
)