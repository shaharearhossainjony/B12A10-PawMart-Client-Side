import { createBrowserRouter } from "react-router";
import HomeLayout from "../Pages/HomeLayout";
import Home from "../Components/Home/Home";
import PetAndSupplies from "../Components/Pet_and_Supplies/PetAndSupplies";
import AddListing from "../Components/AddListing/AddListing";
import MyListings from "../Components/MyListings/MyListings";
import MyOrders from "../Components/MyOrders/MyOrders";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ListingDetailsPage from "../Components/ListingDetailsPage/ListingDetailsPage";
import Error404 from "../Components/Error404/Error404";
import ShopByCategory from "../Components/ShopByCategory/ShopByCategory";
import EditListings from "../Components/EditListings/EditListings";
import PrivateRoute from "../Provider/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/pet-supplies",
        element: <PetAndSupplies></PetAndSupplies>,
      },
      {
        path: "/listings-details/:id",
        element: <PrivateRoute><ListingDetailsPage></ListingDetailsPage></PrivateRoute>,
      },
      {
        path: "/add-listing",
        element: <PrivateRoute><AddListing></AddListing></PrivateRoute>,
      },
      {
        path: "/my-listings",
        element: <PrivateRoute><MyListings></MyListings></PrivateRoute>,
      },
      {
        path: "/my-orders",
        element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/category-filtered-product/:category",
        element: <ShopByCategory />,
      },
      {
        path: "/edit-listings/:id",
        element: <EditListings></EditListings>,
      }
    ],
  },
  {
    path: "/*",
    element: <Error404></Error404>,
  },
]);

export default router;
