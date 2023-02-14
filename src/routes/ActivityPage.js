import {NavBar} from "../components/NavBar";
import {showActivites} from '../Api.fetch'
import { useState,useEffect } from "react";
import ActivityPageCss from '../css/ActivtiyPage.module.css'

export const ActivityPage = ()=>{
    const [activities, setActivities] = useState([])

    const getActivities = async () => {
        // add condtion in here if user is logged in return all routines 
        const res = await showActivites()
        setActivities(res)
    }

    useEffect(() => { getActivities() }, []);

    return (
        <div>
            <NavBar />
            <div className={ActivityPageCss.container}>{
                activities ? activities.map(a => {
                    return (
                        <div className={ActivityPageCss.activity} key={a.id}>
                            <div>
                                <h2>{a.name}</h2>
                            </div>
                            <div>
                                {a.description}
                            </div>
                        </div>
                    )
                }) : null
            }

                ActivityPage
            </div>
        </div>
    )
}

export default ActivityPage