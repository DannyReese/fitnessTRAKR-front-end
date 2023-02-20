import React from "react";
import { Link } from 'react-router-dom'
import HomeCss from '../css/Home.module.css'

const HomeUser = ({me}) => {
  // console.log(me);
 
return (
  <div className={HomeCss.home}>
    <h2>FitnessTrac.kr</h2>
    <h3>Hello {me}</h3>

    <Link to='/routines'>Routines</Link>
    <Link to='/activities'>Activities</Link>
    <Link to='/logout'>Logout</Link>
  
  </div>
  )
};

export default HomeUser;
