

import AddActivityCss from '../css/AddActivity.module.css'
import { showActivites, addActivity } from '../Api.fetch'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AddActivity = ({ routineId, routineName, setUser, setRoutineName }) => {
    console.log(routineId)
    const [activities, setActivities] = useState([])
    const [value, setValue] = useState('')
    const [dur, setDur] = useState('')
    const [count, setCount] = useState('')

    console.log(value, dur, count, routineId)

    const getActivities = async () => {
        setUser(localStorage.getItem('user'))
        const res = await showActivites()
        setActivities(res)
        setRoutineName(localStorage.getItem('routineName'))
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    // eslint-disable-next-line
    useEffect(() => { getActivities() }, []);
    return (
        <>
            <div className={AddActivityCss.title} >
                <h1>{routineName}</h1>
            </div>

            <div className={AddActivityCss.container}>
                <form className={AddActivityCss.form}>

                    <div className={AddActivityCss.cdInputs}>
                        <h3 className={AddActivityCss.title}>Count</h3>
                        <input
                            value={count}
                            placeholder='count..'
                            onChange={event => setCount(event.target.value)}></input>


                    </div>
                    <div className={AddActivityCss.cdInputs}>
                        <h3 className={AddActivityCss.title}>Duration</h3>
                        <input
                            value={dur}
                            placeholder='duration..'
                            onChange={event => setDur(event.target.value)}></input>

                    </div>
                    <div>
                        <h3 className={AddActivityCss.title}>Select Activity</h3>
                        <select
                            className={AddActivityCss.select}
                            value={value}
                            onChange={handleChange} >
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
                    </div>
                    <div className={AddActivityCss.subDiv}>
                        <Link
                            to='/routines-user'
                            className={AddActivityCss.submit}
                            onMouseDown={() => {
                                addActivity(
                                    parseInt(localStorage.getItem('routineId')),
                                    parseInt(value),
                                    parseInt(count),
                                    parseInt(dur)).then(()=>localStorage.removeItem('routineId'))
                            }}>
                            Add</Link>
                    </div>
                </form>
            </div>
        </>
    )
};

export default AddActivity