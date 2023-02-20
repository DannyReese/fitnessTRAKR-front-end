import { URL } from "./Const";

export const getActivities = async () => {
   
    try {
      const response = await fetch(`${URL}activities`, {
        headers: {
          "Content-Type": "application/json"
        },
    });

    const json = await response.json();
    return json;

}  catch (error) {
    console.log('Failed to fetch activities');
    throw error;
  }
};

export const createActiviy = async ({activityName, activityDesc, token}) => {
  try {
      const response = await fetch(`${URL}activities`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            activityName,
            activityDesc
          })
      })

      const json  = await response.json()
      console.log(json)
      return json
      
  } catch (error) {
      console.error(error)
  }
};

export const updateActivity = async ({id, activityName, activityDesc}) => {
  try {
      const resp = await fetch(`${URL}activities/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            activityName,
            activityDesc
          })
      });

      const json = await resp.json();

      console.log(json);
      return json;

  } catch (error) {
      console.error(error);
  }
};
