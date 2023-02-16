

import { Navigate } from 'react-router-dom';
import HomeCss from '../css/Home.module.css'

const Home =({user})=>{

    return(user?<Navigate to='/user'/>:
        <div className={HomeCss.container}>
            <div>
                <h1>Ready to Start Your Fitness Journey?</h1>
            </div>
        </div>
    )
};

export default Home