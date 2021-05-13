import React from "react";
import { Link } from "react-router-dom";
import { logOut } from "../firebase/config";

export default function Logout() {
  return (
    <footer>
      <div>
        Need to switch to different account.{" "}
        <Link onClick={logOut} to='/'>
          Click here
        </Link>{" "}
        to logout
      </div>
    </footer>
  );
}
