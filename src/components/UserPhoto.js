import React from "react";
import { useState, useRef } from "react";
import "./UserPhoto.css";

const UserPhoto = (props) => {
  const {
    displayDeletePhotoButton,
    setDisplayDeletePhotoButton,
    selectedImage,
    setSelectedImage,
  } = props;

  const inputFileRef = useRef(null);

  const handleImageUpload = () => {
    const uploadedPhoto = inputFileRef.current.files[0];
    setSelectedImage(URL.createObjectURL(uploadedPhoto));
    setDisplayDeletePhotoButton(true);
  };

  const deleteImage = () => {
    inputFileRef.current.value = "";
    setSelectedImage(null);
    setDisplayDeletePhotoButton(false);
  };

  return (
    <div className="uploadPhoto">
      {selectedImage ? <img src={selectedImage} alt="uploadedImage" /> : null}
      <input
        ref={inputFileRef}
        type="file"
        accept="image/*"
        name="uploadfile"
        onChange={handleImageUpload}
        id="img"
      />
      <div className="photoButtons">
        {displayDeletePhotoButton ? (
          <button onClick={deleteImage}>Delete Photo</button>
        ) : (
          <label htmlFor="img">Upload Photo</label>
        )}
      </div>
    </div>
  );
};

export default UserPhoto;
