import React   from "react";
import { getActivities } from "../Api.activities";
import ActivityCss from "../css/Activity.module.css";

const Activities = async ( [activities, setActivities]) => 
{
    try {
            const showActivities = async () => {
            const res = getActivities()
            console.log(res)
            setActivities(res)        
        }

        showActivities();

        } catch (error) {
         console.log(error);
        }

         console.log(activities);

//   useEffect((res) => {
//     setActivities(res)
//   }, [setActivities]);

return (
    // <div>
    //     <div className={ActivityCss.titleDiv}>
    //         <div className={ActivityCss.titleBox}>
    //             <div className={ActivityCss.headerBox}>
    //                 <h1 className={ActivityCss.title}>Activities</h1>
    //             </div>
    //         {/* {user? <Link to='/activities-create' className={ActivityPageCss.Link}>Create Activity</Link>:<div>log in to create routines</div>} */}
    //         </div>
    //     </div>

    // <div> 
    {activities.map(activity => {
       return (
           <div className={ActivityCss.activity} key={activity.id}>
                   <h2>{activity.name}</h2>
                   <span>{activity.description}</span>
           </div>
            )
        }) 
    }
       
    // </div>
// </div>
)

}

export default Activities;
