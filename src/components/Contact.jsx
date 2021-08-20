import React, { useState } from "react";

function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  let name, value;
  const getUserdata = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, message } = user;

    if (name && email && phone) {
      const resp = await fetch(
        "https://reactcontactusform-default-rtdb.firebaseio.com/contactusformDB1.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );
      if (resp) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        alert("Thanks for youre Intrest, We will be catch you shortly..!");
      }
    } else {
      alert("please fill mandatory fields the data");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Contact Us</h2>
          <hr className="w-25 mx-auto" />
        </div>
      </div>

      <div className="row">
        <div className="col-10 mx-auto my-4">
          <form method="POST">
            <div className="form-group">
              <label for="name">Enter youre Name</label>
              <input
                type="text"
                required
                onChange={getUserdata}
                value={user.name}
                name="name"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter youre Name *"
              />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                required
                onChange={getUserdata}
                value={user.email}
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email *"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <div className="form-group">
              <label for="mobile">Mobile Number</label>
              <input
                type="number"
                name="phone"
                required
                onChange={getUserdata}
                value={user.phone}
                className="form-control"
                id="mobile"
                aria-describedby="emailHelp"
                placeholder="Enter mobile number *"
              />
            </div>

            <div className="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                name="address"
                onChange={getUserdata}
                value={user.address}
                className="form-control"
                id="address"
                aria-describedby="emailHelp"
                placeholder="Enter Address "
              />
            </div>

            <div className="form-group">
              <label for="message">Message </label>
              <br></br>
              <div className="form-group">
                <textarea
                  id="message"
                  onChange={getUserdata}
                  value={user.message}
                  name="message"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              onClick={postData}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
