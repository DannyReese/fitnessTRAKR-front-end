import React from "react";
import { getRoutines } from "../Api.routines";
import RoutineCss from '../css/Routine.module.css'


const Routines = async ({routines,setRoutines}) => {

    try{
    const response = await getRoutines();

    const resRoutines = response.routines;
    setRoutines (resRoutines);

    }catch (error) {
    console.log("Failed to fetch routines");
    console.log(error);
    }

  return (

    routines.map(routine => {
        return(
          <div className = {RoutineCss.routine} key = {routine.id} >
              <h3>{routine.name}</h3>
              <p> {routine.goal}</p>
          </div>
        )
    })
  )
};

export default Routines;




    
        
        

