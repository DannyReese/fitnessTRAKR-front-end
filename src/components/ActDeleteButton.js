import DeleteCss from "../css/DeleteButton.module.css"
import { deleteRoutineAct } from "../Api.fetch"
import { useState } from "react"

const ActDeleteButton = ({setChange ,activityId})=>{

   
    return (
        <>
            <div>
                <button className={DeleteCss.button}
                 onMouseDown={() => {
                    deleteRoutineAct(activityId).then(()=>setChange(crypto.randomUUID()))
                    
                }
                }>X</button>
            </div>
        </>
    )
}


export default ActDeleteButton