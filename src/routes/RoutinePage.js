
import { useState, useEffect } from "react"
import { pubRoutines } from '../Api.fetch'
import RoutinePageCss from '../css/RoutinePage.module.css'

const RoutinePage = ({setUser}) => {

    const [pubRoutine, setPubRoutines] = useState([])

    const getPubRoutines = async () => {
        setUser(localStorage.getItem('user'))
        const res = await pubRoutines()
    
        setPubRoutines(res)
    }

    useEffect(() => { getPubRoutines() });

    return (
        <div>
         
            <div className={RoutinePageCss.title}><h1>Routines</h1></div>
            <div className={RoutinePageCss.container}>{
                pubRoutine ? pubRoutine.map(pr => {
                    return (
                        <div className={RoutinePageCss.routine} key={pr.id}>
                            <div><h2>{pr.name}</h2></div>
                            <div>{pr.goal}</div>
                            <div><h3>Activities</h3>{pr.activities.map(a => {
                                return (
                                    <div className={RoutinePageCss.activities} key={a.id}>
                                        <div>{a.name}</div>
                                        <div>{a.description}</div>
                                        <div>Duration {a.duration}</div>
                                        <div>Dount {a.count}</div>
                                    </div>
                                )
                            })}</div>
                        </div>
                    )
                }) : null
            }

                routine page
            </div>
        </div>
    )
}

export default RoutinePage