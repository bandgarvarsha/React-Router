import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <div>
        <h1>User 1</h1>
        <h1>User 2</h1>
      </div>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      <div>
        {showActiveUsers ? (
          <h2>Showing active users</h2>
        ) : (
          <h2>Showing all users</h2>
        )}
      </div>
    </>
  );
};

export default Users;
