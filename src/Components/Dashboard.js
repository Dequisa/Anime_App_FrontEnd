import { useEffect, useState } from "react";
import "../CSS/Dashboard.css";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Dashboard({ todo }) {
  let history = useHistory();

  const [userProfile, setUserProfile] = useState(null);
  const [taskComplete, setTaskComplete] = useState(false);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        let res = await axios.get(`http://localhost:3001/user/me`);
        console.log("Dashboard GET current user response:", res);
        if (res.status !== 200 || !res.data.username) {
          history.push("/userlogin");
        } else {
          setUserProfile(res.data);
        }
      } catch (err) {
        console.log(
          "Error Response From Current User Request in Dashboard:",
          err
        );
      }
    };
    getCurrentUser();
  }, [history]);

  const taskHandler = () => {
    taskComplete === true ? setTaskComplete(false) : setTaskComplete(true);
  };
  if (!userProfile) {
    return <div className="Dashboard">Loading...</div>;
  }
  return (
    <div className="Dashboard">
      <div className="userIntro">
        <h2>Welcome to your dashboard, {userProfile.username}!</h2>
        <img
          className="imgfit"
          src={userProfile.img}
          alt=" a person"
          width="6%"
        ></img>
      </div>
      <div className="userInfo">
        <h1>User Information</h1>
        <h3>Name: {userProfile.name}</h3>
        <h3>Email : {userProfile.email}</h3>
        <h3>Funny Saying: {userProfile.quote}</h3>
      </div>
      <div className="userTask">
        <h1>{userProfile.username}'s Approved Anime List</h1>
        <div onClick={taskHandler}>
          {todo.map((todoItem) => (
            <h3 key={todoItem.id}>{todoItem.task}</h3>
          ))}
        </div>
      </div>
      <div className="userStats">
        <h1>{userProfile.username}'s Stats</h1>
        <h3>#of Cards</h3>
        <h3>Quiz Score</h3>
        <h3>User's level</h3>
        <h3>User points</h3>
      </div>
    </div>
  );
}
