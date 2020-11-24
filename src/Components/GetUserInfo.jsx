import React, { useEffect, useState, useContext } from "react";
import Authkit from '../Data/Authkit'
import {UserContext} from '../Contexts/UserContext'


export default function GetUserInfo() {
  const {userData, setUserData} = useContext(UserContext)
  //const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    Authkit.getUserInfo()
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  return (
    <>
       {userData && 
       <>
       User: {userData.id}, {userData.firstName} {userData.lastName}
       </>
       }
    </>
  );
}