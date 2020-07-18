import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Popup from "reactjs-popup";
import TextField from "@material-ui/core/TextField";
import ImageUploading from "react-images-uploading";

const SideBar = () => {
  const [image, setImage] = useState();

  const uploadHandler = event => {
    setImage(event.target.files[0].dataURL());
    console.log(event.target.files[0]);
    localStorage.setItem("image", image);
  };

  const onChange = imageList => {
    // data for submit
    console.log(imageList);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", color: "white" }}>
      <Popup
        trigger={
          <div>
            <span>Need to post your own art ?</span>
            <IconButton style={{}}>
              <AddCircleIcon style={{ color: "white" }} />
            </IconButton>
          </div>
        }
        position="bottom center"
        style={{ width: "700px" }}
      >
        <input type="file" onChange={onChange} />
        <div
          style={{
            margin: "8px",
          }}
        >
          <TextField label="Your Name" variant="outlined" required={true} />
          <button style={{ margin: "8px" }}>Upload</button>
        </div>
      </Popup>
      <image src={localStorage.getItem("image")} />
    </div>
  );
};

export default SideBar;
