
import {showActivites} from '../Api.fetch'
import { useState,useEffect } from "react";
import ActivityPageCss from '../css/ActivtiyPage.module.css'

export const ActivityPage = ({setUser})=>{
    const [activities, setActivities] = useState([])

    const getActivities = async () => {
        setUser(localStorage.getItem('user'))
        const res = await showActivites()
        setActivities(res)
    }

    useEffect(() => { getActivities() });

    return (
        <div>
            {/* <NavBar /> */}
            <div className={ActivityPageCss.title}><h1>Activities</h1></div>
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