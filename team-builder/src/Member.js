import React from "react";

const Member = ({ member }) => {
  console.log(member);
  return (
    <div className="member">
      <h2>Name: {member.name}</h2>
      <p>Email: {member.email}</p>
  <p>Role: {member.role}</p>
    </div>
  );
};

export default Member;
