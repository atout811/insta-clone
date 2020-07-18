import React, { useState } from "react";
import PostList from "./components/postList/postList";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Dropzone from "react-dropzone";
import request from "superagent";

const CLOUDINARY_UPLOAD_PRESET = "gxnmcq7m";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dqajw4zql/image/upload";

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  var tempImage = "";
  var tempName = null;

  const handleSubmit = event => {
    event.preventDefault();
    setName(tempName);
    setImageUrl(tempImage.toString());

    console.log(tempName);
    console.log(tempImage);
  };

  const handleTempName = event => {
    tempName = event.target.value;
  };

  const onImageDrop = files => {
    setUploadedFile(files[0]);
    handleImageUpload(files[0]);
  };

  const handleImageUpload = async file => {
    try {
      let upload = await request
        .post(CLOUDINARY_UPLOAD_URL)
        .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
        .field("file", file);

      upload.end((err, response) => {
        if (err) {
          console.error(err);
        }

        if (response.body.secure_url !== "") {
          tempImage = response.body.secure_url;

          setImageUrl(tempImage.toString());
        }
      });
    } catch (e) {}
  };
  return (
    <div>
      <TopBar />

      <div>
        <form onSubmit={handleSubmit}>
          <Dropzone onDrop={onImageDrop} multiple={false} accept="image/*">
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  {...getRootProps()}
                  style={{
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    color: "white",
                    border: "1px dotted grey ",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <span style={{ marginRight: "8px" }}>
                      Post your own art ? put Your Name
                    </span>
                    <input
                      type="text"
                      placeholder="Enter Your name"
                      onChange={handleTempName}
                    />
                    <input type="submit" value="submit" />
                  </div>

                  <input {...getInputProps()} />

                  <p>Drag and drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone>
        </form>
      </div>
      <PostList image={tempImage} name={name} />
    </div>
  );
}

export default App;
