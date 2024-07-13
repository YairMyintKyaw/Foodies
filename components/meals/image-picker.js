"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [imageFile, setImageFile] = useState(null);
  const input = useRef(null);
  const handleClick = () => {
    input.current.click();
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImageFile(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const imageUrl = fileReader.result;
      setImageFile(imageUrl);
    }
    fileReader.readAsDataURL(file);
  }
  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
      <div className={classes.preview}>
        {!imageFile ? <p>Image is not selected.</p> : <Image src={imageFile} alt="Image selected by the user" fill />}
      </div>
      <input type="file" id={name} required className={classes.input} onChange={handleImageChange} ref={input} name={name} accept="image/png, image/jpeg" />
      <button className={classes.button} type="button" onClick={handleClick}>Pick an image</button>
    </div>
  </div>
}