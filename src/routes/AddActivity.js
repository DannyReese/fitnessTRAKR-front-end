

import AddActivityCss from '../css/AddActivity.module.css'
import { showActivites } from '../Api.fetch'
import { useEffect, useState } from 'react';

const AddActivity = ({ routineId, routineName, setUser }) => {

    const [activities, setActivities] = useState([])
    const [value, setValue] = useState('')
    console.log(value)
    const getActivities = async () => {
        setUser(localStorage.getItem('user'))
        const res = await showActivites()
        setActivities(res)
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => { getActivities() }, []);
    return (
        <>
            <div className={AddActivityCss.title} >
                <h1>{routineName}</h1>
            </div>
            <div className={AddActivityCss.container}>
                <form >
                    <select className={AddActivityCss.select} value={value} onChange={handleChange} >
                        {activities ? activities.map(a => {
                            return (
                                <option
                                    className={AddActivityCss.option}
                                    value={a.id}
                                    key={a.id}
                                >{a.name}
                                </option>)
                        }) : null}
                    </select>
                </form>
            </div>
        </>
    )
};

export default AddActivity