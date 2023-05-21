import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import SingleToy from "../pages/SingleToy/SingleToy";
import AllToys from "../pages/AllToys/AllToys";
import About from "../pages/About/About";
import ToyDetails from "../pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
          {
                    path: "/",
                    element: <Main></Main>,
                    children: [
                              {
                                        path:'/',
                                        element:<Home></Home>
                              },
                              {
                                        path:'/login',
                                        element:<Login></Login>
                              },
                              {
                                        path:'/signup',
                                        element: <SignUp></SignUp>
                              },
                              {
                                        path:'/blog',
                                        element: <Blog></Blog>
                              },
                              {
                                        path:'/alltoys',
                                        element:<AllToys></AllToys>
                              },
                              {
                                        path:'/singletoy',
                                        element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>
                              },
                              {
                                        path:'/about',
                                        element: <About></About>
                              },
                              {
                                        path:'checkout/:id',
                                        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
                              }
                    ]
          },
]);

export default router;