import UserHomeCss from "../css/Home.module.css"
import { Navigate } from "react-router-dom";
import { useEffect, } from "react";


const UserHome = ({setUser ,user})=>{
 console.log(user)


  const nameTheUser =()=>{
    setUser(localStorage.getItem('user'))
  };
  useEffect(()=>{nameTheUser()})
    return (
        user?
        <div className={UserHomeCss.container}>
         <div>
                <h1>{`Welcome ${user}`}</h1>
        </div>
         </div>:<Navigate to ='/'/>
    )
};

export default UserHome