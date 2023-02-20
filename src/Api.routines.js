
import { URL } from "./Const";

export const getRoutines = async () => {
    
    try {
      const response = await fetch(`${URL}routines`, {
        headers: {
          "Content-Type": "application/json"
        },
    });

    const json = await response.json();
    console.log(json);
    return json;

}  catch (error) {
    console.log('Failed to fetch routines');
    console.error(error);
    throw error;
  }
};