import React from "react";
import { useEffect, useState } from "react";
import CommentForm from "../../components/CommentForm/CommentForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import VideoPage from "../VideoPage/VideoPage";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))}
        <CommentForm user={user.username} currentVideo = {props.currentVideo}/> //^passed down user from this page as props and current video from App.js as props to Commentform
        <VideoPage currentVideo = {props.currentVideo}/>  //^passed currentVideo from App.js to VideoPage as props from this page.
    </div>
  );
};

export default HomePage;
