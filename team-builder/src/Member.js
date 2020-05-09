import React from "react";




const Member = ({ member, handleEdit}) => {
  


  return (
    <div className="member-container">
      <h2>Name: {member.fname} {member.lname}</h2>
      <p>Email: {member.email}</p>
  <p>Role: {member.role}</p>
  <button onClick={(() => handleEdit(member, member.id) )}>Edit</button>
    </div>
  );
};

export default Member;
