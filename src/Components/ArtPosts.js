import { useState, useEffect } from "react";
// import axios from "axios";
import "../CSS/Art.css";
import FormData from "form-data";
require("dotenv").config();
const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;
const ACCOUNT_NAME = process.env.IMAGES_ACCOUNT_NAME;

function ArtPosts() {
  const [selectedFile, setSelectedFile] = useState([]);
  const [images, setImages] = useState([]);

  const onFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onUploadClick = async (e) => {
    let id = "";
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `${BEARER_TOKEN}`);
    var formdata = new FormData();
    formdata.append("image", selectedFile);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.imgur.com/3/image", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.status);
        if (result.status === 200) {
          id = result.data.id;
        }
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    const grabImg = () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `${BEARER_TOKEN}`);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `https://api.imgur.com/3/account/${ACCOUNT_NAME}/images/0`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setImages(result.data);
          console.log(result.data);
        })
        .catch((error) => console.log("error", error));
    };
    grabImg();
  }, []);

  return (
    <div className="artDetails">
      <h2>FAN ART!</h2>
      <div className="artUpload">
        <form encType="multipart/form-data" method="POST">
          <label for="pic">Choose a profile picture:</label>
          <input
            type="file"
            name="pic"
            accept="image/png, image/jpeg"
            onChange={onFileSelect}
          />
          <input
            type="button"
            value="Upload file"
            name="pic"
            onClick={onUploadClick}
          />
        </form>
      </div>
      {images.length > 0 &&
        images.map((pic) => {
          return <img src={pic.link} alt="artwork"></img>;
        })}
    </div>
  );
}
export default ArtPosts;
