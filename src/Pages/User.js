import { useRef, useState } from "react";
import { WrapComponent } from "../Components/Wrap";
import SimpleReactValidator from "simple-react-validator";

export function User() {
  const [name, SetName] = useState("");
  const [dob, SetDOB] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [userForm, setuserForm] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
  });

  const [, fourceupdate] = useState(0);

  const validator = useRef(
    new SimpleReactValidator({
      // className: "text-danger",
    })
  );

  const handleFormChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;

    setuserForm({
      ...userForm,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    const isvalid = validator.current.allValid();
    if (isvalid) {
      console.log("form submission", userForm);
    } else {
      validator.current.showMessages();
      fourceupdate(1);
      console.log("form field missing");
    }
  };

  return (
    <div className="container  mt-3">
      <div className="row">
        <div className="col-6">
          <WrapComponent>
            <div className="row">
              <div className="col-6">
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your name"
                    value={userForm.name}
                    onChange={handleFormChange}
                    name="name"
                  />
                  {validator.current.message("Name", userForm.name, "required")}
                  {/* <span>Name field is required</span> */}
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label class="form-label">DOB</label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Enter your DOB"
                    value={userForm.dob}
                    onChange={handleFormChange}
                    name="dob"
                  />
                  {/* {validator.current.message("DOB", userForm.dob, "required")} */}
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your email"
                    value={userForm.email}
                    onChange={handleFormChange}
                    name="email"
                  />
                  {validator.current.message(
                    "Email",
                    userForm.email,
                    "required|email"
                  )}
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label class="form-label">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your phone"
                    value={userForm.phone}
                    onChange={handleFormChange}
                    name="phone"
                  />
                  {validator.current.message(
                    "Phone",
                    userForm.phone,
                    "required|Phone"
                  )}
                </div>
              </div>
              <div className="co-12">
                <button
                  type="submit"
                  className="btn btn-primary me-2"
                  onClick={handleFormSubmit}
                >
                  Submit
                </button>
                <button type="reset" className="btn btn-secondary">
                  Reset
                </button>
              </div>
            </div>
          </WrapComponent>
        </div>
      </div>
    </div>
  );
}
