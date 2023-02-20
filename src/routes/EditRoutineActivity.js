import { updateRoutineActivity } from '../Api.fetch'
import { Link } from 'react-router-dom';
import EditRaCss from '../css/EditRoutineAct.module.css'
import { useEffect } from 'react';

const EditRoutineActivity = ({ setUser, setCount, setDur, count, dur }) => {
    const nameTheUser = () => {
        setUser(localStorage.getItem('user'))
    };
    // eslint-disable-next-line
    useEffect(() => { nameTheUser() }, []);
    return (<>
        <div className={EditRaCss.title} >
            <h1>{localStorage.getItem('actName')}</h1>
        </div>

        <div className={EditRaCss.container}>

            <form className={EditRaCss.form}>

                <div className={EditRaCss.cdInputs}>
                    <h3 className={EditRaCss.title}>Count</h3>
                    <input
                        value={count}
                        placeholder={`${count}`}
                        onChange={event => setCount(event.target.value)}>
                    </input>
                </div>

                <div className={EditRaCss.cdInputs}>
                    <h3 className={EditRaCss.title}>Duration</h3>
                    <input
                        value={dur}
                        placeholder={`${dur}`}
                        onChange={event => setDur(event.target.value)}>
                    </input>
                </div>

                <div className={EditRaCss.subDiv}>
                    <Link to='/routines-user'
                        className={EditRaCss.submit}
                        onMouseDown={() => {
                            updateRoutineActivity(
                                localStorage.getItem('actId'),
                                count,
                                dur
                            ).then(() => {
                                localStorage.removeItem('actId')
                                localStorage.removeItem('actName')})
                        }}> Submit Changes</Link>
                </div>

            </form>

        </div>
    </>
    )

}

export default EditRoutineActivity