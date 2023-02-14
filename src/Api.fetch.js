const URL = "http://fitnesstrac-kr.herokuapp.com/api/"


export const register = async(username , password)=>{
try{
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

}catch(error){
    console.error(error)
}

}

export const login = async(username,password)=>{

    try{
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
localStorage.setItem('user', username)
localStorage.setItem('token', data.token)
return data 
    }catch(error){
        console.error(error)
    }
}