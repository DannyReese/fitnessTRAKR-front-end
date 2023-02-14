import {Register} from "../components/register";
import{Login} from "../components/login"
import HomeCss from '../css/Home.module.css'

const Home =()=>{

    return(
        <div className={HomeCss.Page}>
            <Register/>
            <Login/>
        </div>
    )
};

export default Home