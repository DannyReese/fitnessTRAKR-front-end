import React, { useEffect } from "react";
import { myUser } from "../Api.fetch";

const Home = ({token,setToken,me,setMe}) => {
   
console.log(token)

useEffect(() => {
        if (token) {
          myUser(token)
            .then((me) => {
              setMe(me);
            })
            .catch((error) => {
              console.log(`Failed to fetch me.`);
            });
        }
      })

return (
        <>
          <header>
            <h3>Hello : {me} </h3>
            </header>
        </>

    )}

export default Home;