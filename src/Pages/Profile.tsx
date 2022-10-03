import * as React from "react";
import * as Types from "../../Types";
import { ProjectArray } from "../ProjectInfo";
import { useNavigate } from "react-router-dom";

const Profile = (props: Types.ProfileProps) => {
  const nav = useNavigate();

  return (
    <div className="d-flex row flex-wrap">
      <div className="my-4">
        <h1 className="text-center">This is Profile</h1>
      </div>
    </div>
  );
};

export default Profile;
