import React, { useState } from "react";

const Form = () => {
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    role: ""
  });
  console.log(formValues);
  const onValueChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };
  const onFormSubmit = event => {
    event.preventDefault();
    alert(`sumbitting all forms`);
  };
  return (
    <div>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          placeholder="First Name"
          name="fname"
          value={formValues.fname}
          onChange={onValueChange}
        />
        <input
          placeholder="Last Name"
          name="lname"
          value={formValues.lname}
          onChange={onValueChange}
        />
        <input
          placeholder="Email"
          name="email"
          value={formValues.email}
          onChange={onValueChange}
        />
        <input
          placeholder="Role"
          name="role"
          value={formValues.role}
          onChange={onValueChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
