import React , {useEffect}  from "react";
import { getActivities } from "../Api.activities";
// eslint-disable-next-line
import ActivityCss from "../css/Activity.module.css";

const Activities = async ( activities, setActivities) => 

{
useEffect(() => {
    try {
        
            const showActivities = async () => {
            const res = await getActivities()
            setActivities(res)
        }

        showActivities();

        } catch (error) {
         console.log(error);
        }

    }, [setActivities]);

return (
    <div>
        <div className={ActivityCss.titleDiv}>
            <div className={ActivityCss.titleBox}>
                <div className={ActivityCss.headerBox}>
                    <h1 className={ActivityCss.title}>Activities</h1>
                </div>
            {/* {user? <Link to='/activities-create' className={ActivityPageCss.Link}>Create Activity</Link>:<div>log in to create routines</div>} */}
            </div>
        </div>
    <div className={ActivityCss.container}> 
    {activities ? activities.map(a => {
       return (
           <div className={ActivityCss.activity} key={a.id}>
                   <h2>{a.name}</h2>
                   <span>{a.id}</span>
                   <span>{a.description}</span>
               
           </div>
       )
   }) : null
}
   Activities
</div>
</div>
    )

}

export default Activities;
