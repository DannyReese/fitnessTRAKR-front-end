const URL = "http://fitnesstrac-kr.herokuapp.com/api/";

export const register = async (username, password) => {
  try {
    const response = await fetch(`${URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
    });
    const data = await response.json();

    console.log(data);
    // localStorage.setItem("user", username);
    // localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const myUser = async (token) => {
    try {
      const response = await fetch(
        `${URL}/users/me`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const json = await response.json();
      const me = json.data.username;
      return me;

    } catch (error) {
      console.log('Failed to fetch current user.');
      console.error(error);
      throw error;
    }
  };
