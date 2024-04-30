import "./newClothing.css";
import { useState } from "react";

const NewClothing = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [color, setColor] = useState("");

  return (
    <div className="newClothingComponent">
      <h1> Create New Item</h1>
      <div className="formContainer">
        <input type="text" placeholder="Name" className="" />
        <input type="text" placeholder="Description" className="" />
        <input type="text" placeholder="Brand" className="" />
        <input type="text" placeholder="Size" className="" />
        <input type="text" placeholder="Rental Price" className="" />
        <input type="text" placeholder="Retail Price" className="" />
        <input type="text" placeholder="Color" className="" />
        <input type="text" placeholder="Min Rental Period" className="" />
        <input
          type="file"
          id="img-upload"
          accept="image/png, image/jpeg"
          capture="filesystem"
        />
        <label htmlFor="img-upload" className="addPicturesBtn">
          Add Pictures
        </label>
      </div>
    </div>
  );
};

export default NewClothing;
