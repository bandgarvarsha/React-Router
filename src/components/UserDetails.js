import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const userId = params.id;

  return (
    <div>
      <h1>Details about user {userId} </h1>
    </div>
  );
};

export default UserDetails;
