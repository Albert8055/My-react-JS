import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Productform = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState({ name: "", description: "" });
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDiscrChange = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setResult({ name: name, description: description });
    navigate("/Data", { state: { name: name, description: description } });
    // if (result.name != "" && result.description != "") {

    // } else {
    //   alert("Plese Enter a Data");
    // }
  };

  return (
    <>
      <div className="container">
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Product Name
            </label>
            <div class="invalid-feedback">
    Please choose a username.
  </div>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Product Discrption{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleDiscrChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      {/* <div>
        Name:{result.name} <br />
        Discrption:{result.description}
      </div> */}
    </>
  );
};

export default Productform;
