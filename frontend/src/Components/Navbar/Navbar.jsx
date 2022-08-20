
import style from "./Navbar.module.css";
import { loginSuccess } from "../../Redux/Login/action";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router";
export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  return (
    <div className={style.navbarContainer}>
     <div className={style.navItems}>Logo</div>
     <div className={style.navItems}> Home</div>
     <div className={style.navItems} onClick={() => {localStorage.removeItem('token',"role")
         dispatch(loginSuccess({token:"",login:false}));
         navigate("/");
    }}>
      Logout
     </div>
    </div>
  )
}
