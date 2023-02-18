import { useEffect } from "react";
import CreateAct from "../components/CreateAct";

const CreateActiviy = ({setUser})=>{

    const nameTheUser =()=>{
        setUser(localStorage.getItem('user'))
      };
      useEffect(()=>nameTheUser(),[])
    return(
        <div>
            <CreateAct/>
        </div>
    )
}

export default CreateActiviy