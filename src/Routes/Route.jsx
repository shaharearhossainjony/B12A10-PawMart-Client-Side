import { createBrowserRouter } from "react-router";
import HomeLayout from "../Pages/HomeLayout";
import Home from "../Components/Home/Home";
import PetAndSupplies from "../Components/Pet_and_Supplies/PetAndSupplies";
import AddListing from "../Components/AddListing/AddListing";
import MyListings from "../Components/MyListings/MyListings";
import MyOrders from "../Components/MyOrders/MyOrders";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";


const router = createBrowserRouter([
    {
        path : "/",
        element : <HomeLayout></HomeLayout>,
        children :[
            {
                path: "/",
                element : <Home></Home>
            },
            {
                path: "/pet-supplies",
                element : <PetAndSupplies></PetAndSupplies>
            },
            {
                path: "/addlisting",
                element : <AddListing></AddListing>
            },
            {
                path: "/mylistings",
                element : <MyListings></MyListings>
            },
            {
                path: "/myorders",
                element : <MyOrders></MyOrders>
            },
            {
                path: "/login",
                element : <Login></Login>
            },
            {
                path: "/register",
                element : <Register></Register>
            }
        ]
    },
    {
        path : "/*",
        element : <p>error 404</p>
    }
])


export default router;