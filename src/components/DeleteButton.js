import { useState, useEffect } from 'react'
import { deleteRoutine } from '../Api.fetch'
import DeleteCss from '../css/DeleteButton.module.css'


const DeleteButton = ({ routineId, setChange }) => {

    return (
        <>
            <div  >
                <button className={DeleteCss.button}
               
                 onMouseDown={() => {
                  
                    deleteRoutine(routineId).then(()=>setChange(crypto.randomUUID()))
                    
                  
                 }
             
                }>X</button>
            </div>
        </>
    )
}
export default DeleteButton
