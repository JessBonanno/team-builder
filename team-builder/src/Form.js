import React, { useState, useEffect } from "react";

const Form = ({ memberToEdit, editMember, addNewMember }) => {

  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    role: "",
  });
  
  useEffect(() => {
    JSON.stringify(memberToEdit) !== '{}' && setFormValues(memberToEdit);
  }, [memberToEdit])

  
  
  const handleChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewMember({...formValues, id: Date.now()});
    setFormValues({
      fname: "",
      lname: "",
      email: "",
      role: "",
    });
  };

  return (
    <div>
      <h1>Team Builder</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="fname"
          value={formValues.fname}
          onChange={handleChanges}
        />
        <input
          placeholder="Last Name"
          name="lname"
          value={formValues.lname}
          onChange={handleChanges}
        />
        <input
          placeholder="Email"
          name="email"
          value={formValues.email}
          onChange={handleChanges}
        />
        <input
          placeholder="Role"
          name="role"
          value={formValues.role}
          onChange={handleChanges}
        />
      </form>
      {JSON.stringify(memberToEdit) !== "{}" ? (
        <button onClick={() => editMember(formValues, memberToEdit.id)}>Update</button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default Form;
