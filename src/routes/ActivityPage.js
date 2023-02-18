
import {showActivites} from '../Api.fetch'
import { useState,useEffect } from "react";
import {Link} from 'react-router-dom'
import ActivityPageCss from '../css/ActivtiyPage.module.css'

export const ActivityPage = ({setUser,user})=>{
    const [activities, setActivities] = useState([])

    const getActivities = async () => {
        setUser(localStorage.getItem('user'))
        const res = await showActivites()
        setActivities(res)
    }

    useEffect(() => { getActivities() },[]);

    return (
        <div>
               <div className={ActivityPageCss.titleDiv}>
        <div className={ActivityPageCss.titleBox}>
        <div className={ActivityPageCss.headerBox}>
        <h1 className={ActivityPageCss.title}>Activities</h1>
        </div>
        {user? <Link to='/activities-create' className={ActivityPageCss.Link}>Create Activity</Link>:<div>log in to create routines</div>}
       
        </div>
        
        </div>
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