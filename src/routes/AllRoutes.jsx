import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home";
import Favourite from "../pages/user/Favourite";
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import UserPrivate from "../private/UserPrivate";
import AllVideos from "../pages/admin/AllVideos";
import RegisterChef from "../pages/admin/RegisterChef";
import ChefDetails from "../pages/admin/ChefDetails";
import ShowVideo from "../pages/admin/ShowVideo";
import AdminHome from "../pages/admin/AdminHome";
import AdminPrivate from "../private/AdminPrivate";
import Users from "../pages/admin/Users";
import GoogleRedirect from "../pages/user/GoogleRedirect";
import UserShowVideo from "../pages/user/UserShowVideo";
import SearchResult from "../pages/user/SearchResult";
import ChannelDetails from "../pages/user/ChannelsDetails";
import AllChannels from "../pages/user/AllChannels";
import { Update } from "../pages/admin/Update";
const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path="/admin"
        element={
          <AdminPrivate>
            <AdminHome />
          </AdminPrivate>
        }
      />
      <Route
        path="/favourite"
        element={
          <UserPrivate>
            <Favourite />
          </UserPrivate>
        }
      />
      <Route path="/update" element={ <AdminPrivate><Update/></AdminPrivate>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/searchresult" element={<SearchResult/>} />
      <Route path="/allchannels" element={<AllChannels/>} />
      <Route path="/channeldetails/:id" element={<ChannelDetails/>} />
      <Route
        path="/newchef"
        element={
          <AdminPrivate>
            <RegisterChef />
          </AdminPrivate>
        }
      />
      <Route
        path="/videos"
        element={
          <AdminPrivate>
            <AllVideos />
          </AdminPrivate>
        }
      />
      <Route
        path="/chefdetails/:id"
        element={
          <AdminPrivate>
            <ChefDetails />
          </AdminPrivate>
        }
      />
      <Route
        path="/showvideo/:id"
        element={
          <AdminPrivate>
            <ShowVideo />
          </AdminPrivate>
        }
      />

<Route
        path="/users"
        element={
          <AdminPrivate>
            <Users/>
          </AdminPrivate>
        }
      />

      <Route path="/uservideo/:id" element={<UserShowVideo/>}/>

      <Route path="/redirect" element={<GoogleRedirect/>} />

      <Route path="*" element={<h3 style={{display:"flex",alignItems:"center",justifyContent:"center",height:"80vh",color:"gray"}}>Page Not Found...!</h3>}/>
    </Routes>
  );
};

export default AllRoutes;
