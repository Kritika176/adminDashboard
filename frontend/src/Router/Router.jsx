import {Route,Routes} from "react-router-dom"; 
import { Signup } from "../Components/Signup/Signup";
import {Login} from "../Components/Login/Login";
import { Home } from "../Components/Home/Home";
import { Dashboard } from "../Components/AdminPanel/Dashboard";
export const Router = () => {
  return (
   <Routes>
    <Route path="/" element={<Login></Login>}></Route>
    <Route path="/home/user" element={<Home></Home>}></Route>
    <Route path="/home/admin" element={<Dashboard></Dashboard>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
   </Routes>
  )
}
