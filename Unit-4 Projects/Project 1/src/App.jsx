import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    aadharName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    permanentAddress: "",
    currentAddress: "",
    city: "",
    state: "",
    photo: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [sameAddress, setSameAddress] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSameAddress = (e) => {
    const checked = e.target.checked;
    setSameAddress(checked);

    if (checked) {
      setForm({
        ...form,
        currentAddress: form.permanentAddress
      });
    } else {
      setForm({
        ...form,
        currentAddress: ""
      });
    }
  };

  const handlePermanentAddress = (e) => {
    const value = e.target.value;

    setForm({
      ...form,
      permanentAddress: value,
      currentAddress: sameAddress ? value : form.currentAddress
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (
        file.type === "image/jpeg" ||
        file.type === "image/png"
      ) {
        setForm({
          ...form,
          photo: file.name
        });

        setErrors({
          ...errors,
          photo: ""
        });
      } else {
        setErrors({
          ...errors,
          photo: "Only JPG, JPEG or PNG files are allowed"
        });
      }
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(form.name)) {
      newErrors.name = "Name should contain only letters";
    }

    if (!form.aadharName.trim()) {
      newErrors.aadharName = "Aadhar Name is required";
    } else if (!/^[A-Za-z ]+$/.test(form.aadharName)) {
      newErrors.aadharName = "Aadhar Name should contain only letters";
    } else if (
      form.name.trim().toLowerCase() !==
      form.aadharName.trim().toLowerCase()
    ) {
      newErrors.aadharName =
        "Name and Aadhar Name must be equal";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must contain 10 digits";
    }

    if (form.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    if (!form.dob) {
      newErrors.dob = "Date of birth is required";
    }

    if (!form.gender) {
      newErrors.gender = "Select gender";
    }

    if (!form.permanentAddress.trim()) {
      newErrors.permanentAddress =
        "Permanent address is required";
    }

    if (!form.currentAddress.trim()) {
      newErrors.currentAddress =
        "Current address is required";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!form.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!form.photo) {
      newErrors.photo = "Photo is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("Account created successfully!");
    } else {
      setSuccess("");
    }
  };

  const handleClear = () => {
    setForm({
      name: "",
      aadharName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
      permanentAddress: "",
      currentAddress: "",
      city: "",
      state: "",
      photo: ""
    });

    setErrors({});
    setSuccess("");
    setSameAddress(false);
  };

  return (
    <div className="container">

      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <p>{errors.name}</p>


        <label>Aadhar Name</label>
        <input
          type="text"
          name="aadharName"
          value={form.aadharName}
          onChange={handleChange}
        />
        <p>{errors.aadharName}</p>


        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>


        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <p>{errors.phone}</p>


        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>


        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <p>{errors.confirmPassword}</p>


        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />
        <p>{errors.dob}</p>


        <label>Gender</label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <p>{errors.gender}</p>


        <label>Permanent Address</label>
        <textarea
          name="permanentAddress"
          value={form.permanentAddress}
          onChange={handlePermanentAddress}
        ></textarea>
        <p>{errors.permanentAddress}</p>


        <div className="checkbox">
          <input
            type="checkbox"
            checked={sameAddress}
            onChange={handleSameAddress}
          />

          <span>
            Current address is same as permanent address
          </span>
        </div>


        <label>Current Address</label>
        <textarea
          name="currentAddress"
          value={form.currentAddress}
          onChange={handleChange}
        ></textarea>
        <p>{errors.currentAddress}</p>


        <label>City</label>
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
        />
        <p>{errors.city}</p>


        <label>State</label>
        <input
          type="text"
          name="state"
          value={form.state}
          onChange={handleChange}
        />
        <p>{errors.state}</p>


        <label>Photo</label>
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handlePhoto}
        />
        <p>{errors.photo}</p>


        <div className="buttons">
          <button type="submit">
            Create Account
          </button>

          <button
            type="button"
            className="clear"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>

        {success && (
          <h3 className="success">
            {success}
          </h3>
        )}

      </form>
    </div>
  );
}

export default App;