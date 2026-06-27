import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/pages/LandingPages/Home";
import LogIn from "@/pages/AuthPages/LogIn";
import Overview from "@/pages/DashboardPages/Overview";
import { GoArrowRight } from "react-icons/go";

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <div className="bg-black ">
        <div className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20 h-screen">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            404 Not Found
          </h1>
          <div className="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
          <p className="md:text-xl text-gray-400 max-w-lg text-center">
            The page you are looking for does not exist or has been moved.
          </p>
          <a
            href="/"
            className="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-10 font-medium active:scale-95 transition-all"
          >
            Back to Home
            <GoArrowRight
              size={24}
              className="group-hover:translate-x-1 transition-all text-[#1E1E1E]"
            />
          </a>
        </div>
      </div>
    ),
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="overview" replace />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
    ],
  },
]);

export default router;
