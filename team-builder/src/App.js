import React, { useState, useEffect } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import Member from "./Member";
import Form from "./Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([dummyData]);
  const [memberToEdit, setMemberToEdit] = useState({});

  useEffect(() => {
    setTeamMembers(dummyData);
  }, []);

  const handleEdit = (member, id) => {
    setMemberToEdit({ ...member, id: id });
  };
  const editMember = (newInfo, id) => {
    console.log(id);

    setTeamMembers(
      teamMembers.map((mbr) => {
        if (mbr.id === id) {
          return newInfo;
        } else {
          return mbr;
        }
      })
    );
  };

  const addNewMember = (newMember) => {
    setTeamMembers([...teamMembers, newMember]);
  };

  console.log(teamMembers);
  return (
    <div className="App">
      <Form
        memberToEdit={memberToEdit}
        editMember={editMember}
        addNewMember={addNewMember}
      />
      <div className="team-members">
        {teamMembers.map((member) => {
          return <Member member={member} handleEdit={handleEdit} />;
        })}
      </div>
    </div>
  );
}

export default App;
