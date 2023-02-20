const URL = "https://fitnesstrac-kr.herokuapp.com/api/"



export const register = async (username, password) => {
    try {
        const resp = await fetch(`${URL}users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: `${username}`,
                password: `${password}`
            })
        })
        const data = await resp.json();
        console.log(data)
        return data;

    } catch (error) {
        console.error(error)
    }

}

export const login = async (username, password) => {

    try {
        const resp = await fetch(`${URL}users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: `${username}`,
                password: `${password}`
            })
        })
        const data = await resp.json()
        console.log(data.token)
        localStorage.setItem('token',data.token)
        
        return data
    } catch (error) {
        console.error(error)
    }
}

export const isUser = async (token) => {

    try {

        const resp = await fetch(`${URL}users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        const data = await resp.json();
        if(data.username){
        return data
        }
        return false
    } catch (error) {
        console.error(error)
    }
}

export const showUsersRoutines = async (username) => {
   
    const resp = await fetch(`${URL}users/${username}/routines`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`

        },
    })

    const data = await resp.json();



    return data
};


export const showActivites = async () => {
    try {
        const resp = await fetch(`${URL}activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await resp.json()

      

        return data
    } catch (error) {
        console.error(error)
    }
};

export const createActiviy = async (name, desc) => {
    try {
        const resp = await fetch(`${URL}activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                name: `${name}`,
                description: `${desc}`
            })
        })

        const data = await resp.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
};

export const updateActivity = async (id, name, desc) => {
    try {
        const resp = await fetch(`${URL}activities/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                name: `${name}`,
                description: `${desc}`
            })
        });

        const data = await resp.json();

        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getRoutineById = async (id) => {
    try {
        const resp = await fetch(`${URL}activities/${id}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await resp.json()

        console.log(data);

        return data;
    } catch (error) {
        console.error(error);
    }
};

export const pubRoutines = async () => {
    try {
        const resp = await fetch(`${URL}routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await resp.json();

  

        return data;
    } catch (error) {
        console.error(error)
    }
};

export const createRoutine = async ({name, goal, isPublic}) => {
    try {
        const resp = await fetch(`${URL}routines`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                name: `${name}`,
                goal: `${goal}`,
                isPublic: isPublic
            })
        })

        const data = await resp.json();

        console.log(data);

        return data;
    } catch (error) {
        console.error(error);
    }
};

export const updateRoutine = async (id, name, goal, isPublic) => {
    try {
        const resp = await fetch(`${URL}routines/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                name: `${name}`,
                goal: `${goal}`,
                isPublic: isPublic
            })
        })
        const data = await resp.json();

        console.log(data);

        return data;


    } catch (error) {
        console.error(error)
    }
};

export const deleteRoutine = async (id) => {
    try {
        const resp = await fetch(`${URL}routines/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        const data = await resp.json();

        console.log(data);

        return data;

    } catch (error) {
        console.error(error)
    }
};

export const addActivity = async (id, actId, count, duration) => {
    try {
        console.log(id, actId, count, duration)

        const resp = await fetch(`${URL}routines/${id}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                activityId: actId,
                count: count,
                duration: duration
            })
        });

        const data = await resp.json();

        console.log(data);

        return data;

    } catch (error) {
        console.error(error)
    }
};

export const updateRoutineActivity = async (id, count, dur) => {
    try {console.log(id,count,dur)
        const resp = await fetch(`${URL}routine_activities/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                count: count,
                duration: dur
            })
        })

        const data = await resp.json();

        console.log(data);

        return data;

    } catch (error) {
        console.error(error)
    }
};

export const deleteRoutineAct = async (id) => {
    try {
        const resp = await fetch(`${URL}routine_activities/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        const data = resp.json()

        console.log(data)

        return data;


    } catch (error) {
        console.error(error)
    }
}


