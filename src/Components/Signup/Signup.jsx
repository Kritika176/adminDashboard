import style from "./Signup.module.css";
import axios from "axios";
import TextFeild from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const StyledTextFeild = styled(TextFeild)({
  width: "80%",
  border: "none",
});

export function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    msg: "",
    param: "",
  });
  const createUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://testing0107.herokuapp.com/signup", user)
      .then((res) => {
        if(res.data.error)
        {
            setError({
                msg:res.data.message,
                param:"status"
            })
        }
        else if (res.data.errors) {
          setError({
            msg: res.data.errors[0].msg,
            param: res.data.errors[0].param,
          });
        } 
        else {
            
          navigate("/");
        }
      })

      .catch((err) => console.log(err.message));
  };
  return (
    <div id={style.signupContainer}>
      <div className={style.main}>
        <form className={style.signupForm} onSubmit={handleSubmit}>
          <label>SIGNUP</label>
          <StyledTextFeild
            className={style.text}
            label="username"
            type="text"
            name="username"
            value={user.username}
            onChange={createUser}
           
          />
          

          <StyledTextFeild
            name="email"
            value={user.email}
            className={style.text}
            label="Email"
            type="email"
            onChange={createUser}
            onClick={() => setError({ msg: "", param: "" })}
          />
          {error.param === "email" && (
            <span className={style.error}>{`*${error.msg}`}</span>
          )}

          <StyledTextFeild
            name="password"
            value={user.password}
            className={style.text}
            label="Password"
            type="password"
            onChange={createUser}
            onClick={() => setError({ msg: "", param: "" })}
          />
          {error.param === "password" && (
            <span className={style.error}>{`*${error.msg}`}</span>
          )}
          <button type="submit" >
            Signup
          </button>
          {error.param === "status" && (
            <span className={style.error}>{`*${error.msg}`}</span>
          )}
          <Link to={"/"}>
            <p className={style.link}>Already have an account?Sign In</p>
          </Link>
        </form>
      </div>
    </div>
  );
}