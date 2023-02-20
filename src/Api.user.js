// const URL = "http://fitnesstrac-kr.herokuapp.com/api/";
import { URL } from "./Const";

export const register = async (username, password,setToken) => {
  try {
    const response = await fetch(`${URL}users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
    });
    const json = await response.json();
    console.log(json);
    // const responseToken = json.token;
    // setToken(responseToken);

    // localStorage.setItem('token',json.token);
    // localStorage.setItem("user", username);

    return json;

  } catch (error) {
    console.error(error);
  }
};

export const login = async (username, password, setToken) => {
  try {
    const response = await fetch(`${URL}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
    });
    const json = await response.json();
    console.log(json);
    // const responseToken = json.token;
    // setToken(responseToken);
    // localStorage.setItem("user", username);
    // localStorage.setItem("token", data.token);
    return json;

  } catch (error) {
    console.error(error);
  }
};

export const myUser = async (token) => {
    try {
      const response = await fetch(
        `${URL}users/me`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const json = await response.json();
      // return json;
      const user = json.username;
      console.log(user)
      return user;

    } catch (error) {
      console.log(error);
    }
  };

 
