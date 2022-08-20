import style from "./Dashboard.module.css";
import {useState,useEffect} from "react";
import axios from "axios";
import {Navbar} from "../Navbar/Navbar";
import { UserCard } from "../UserCard/UserCard";
import { loginSuccess } from "../../Redux/Login/action";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
export const Dashboard = () => {
  const store = useSelector(store => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() =>{
    let token = localStorage.getItem("token");
    if(!token)
    {
      navigate("/login");
    }
     else if(!store.login )
     {
        dispatch(loginSuccess({token:token, login:true})); 
     }
    else{
      let role = localStorage.getItem("role");
      if(role === "admin")
      {
        navigate("/home/admin"); 
      }
      else{
        navigate("/home/user"); 
      }
    }
  },[dispatch,navigate,store.login])
  const [userData,setUserData] = useState([]);
    useEffect(() => 
      {
        axios.get("https://testing0107.herokuapp.com/users",
       {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}}
        
        ).then(res => setUserData([...res.data]))
        .catch(err => console.log(err.message))
         
       }
    ,[]);
  return (

    <div className={style.dashboardContainer}>
        <div className={style.sideBar}>
          <div className={style.logo}>Admin</div>
          <div className={style.menuItems}>
              <div className={style.menuDisplay}>
               Home
              </div>
              <div className={style.menuDisplay}>
                Menu Item
              </div>
              <div className={style.menuDisplay}>
              Menu Item
              </div>
              <div className={style.menuDisplay}>
              Menu Item
              </div>
              <div className={style.menuDisplay}>
              Menu Item
              </div>

          </div>
        </div>
        <div className={style.mainBox}>
           <Navbar></Navbar>
           <div className = {style.mainContent}>
              {userData.map((e) => <UserCard email={e.email} username={e.username} key={e._id}></UserCard> )}
           </div>
        </div>
    </div>
  )
}
