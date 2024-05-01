import "./newClothing.css";
import React, { useState } from "react";

const NewClothing = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [color, setColor] = useState("");
  const [minRental, setMinRental] = useState("");
  const [images, setImages] = useState([]);

  const handleImgChange = (event) => {
    const files = event.target.files;
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = function (e) {
        newImages.push(e.target.result);
        if (newImages.length === files.length) {
          setImages(newImages);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <div className="newClothingComponent">
      <h1> Create New Item</h1>
      <div className="formContainer">
        <input
          type="text"
          placeholder="Name"
          className="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Brand"
          className="brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          placeholder="Size"
          className="size"
          onChange={(e) => setSize(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rental Price"
          className="rentalPrice"
          onChange={(e) => setRentalPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Retail Price"
          className="retailPrice"
          onChange={(e) => setRetailPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Color"
          className="color"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Rental Period"
          className=""
          onChange={(e) => setMinRental(e.target.value)}
        />
        <input
          type="file"
          id="img-upload"
          accept="image/png, image/jpeg"
          capture="filesystem"
          multiple
          onChange={(e) => handleImgChange(e)}
        />
        <label htmlFor="img-upload" className="addPicturesBtn">
          Add Pictures
        </label>
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            style={{ maxWidth: "200px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default NewClothing;
