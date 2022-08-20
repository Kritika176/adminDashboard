import style from "./Home.module.css";
import { useEffect } from 'react';
import { loginSuccess } from '../../Redux/Login/action';
import { useDispatch,useSelector } from 'react-redux';
import {Navbar} from "../Navbar/Navbar";
import { useNavigate } from 'react-router';
export const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const store = useSelector(store => store);
    useEffect(() =>{
      let token = localStorage.getItem("token");
      if(!token)
      {
        navigate("/");
      }
      else if(!store.login && token)
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
  return (
    <div className={style.homeDiv}>
      <Navbar></Navbar>
      <div className={style.imageDiv}>
      <img src="https://cdn.pixabay.com/photo/2015/05/28/09/08/hyacinth-787758__340.jpg" alt="" width={"100%"} height={"100%"} />
      </div>
    </div>
  )
}
